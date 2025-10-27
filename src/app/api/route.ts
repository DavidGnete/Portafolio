import { NextResponse } from "next/server";
import ModelCampo from "./modelos/modelbd";
import { MongoConect, GoogleSheetConect } from "./conexion/conectmongoDB";

export async function POST(req: Request) {
  try {
    await MongoConect();

    //
    const body = await req.json();

    const nuevo = await ModelCampo.create(body);

    // 
    const sheets = await GoogleSheetConect();

    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID!,
      range:"contacts!A1", 
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name ?? "",
            body.email ?? "",
            body.message ?? "",
            new Date().toLocaleString(), 
          ],
        ],
      },
    });

  
    return NextResponse.json({ success: true, data: nuevo }, { status: 201 });
  } catch (error: any) {
    console.error(" Error en POST:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await MongoConect();
    const registros = await ModelCampo.find();
    return NextResponse.json({ success: true, data: registros }, { status: 200 });
  } catch (error: any) {
    console.error(" Error en GET:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

