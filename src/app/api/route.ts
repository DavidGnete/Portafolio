import { NextResponse } from "next/server";
import ModelCampo from "./modelos/modelbd";
import { MongoConect, GoogleSheetConect } from "./conexion/conectmongoDB";

// =============================================
// 🔹 POST — Guardar en MongoDB y Google Sheets
// =============================================
export async function POST(req: Request) {
  try {
    // 1️⃣ Conectar a MongoDB
    await MongoConect();

    // 2️⃣ Leer los datos del body
    const body = await req.json();

    // 3️⃣ Guardar en MongoDB
    const nuevo = await ModelCampo.create(body);

    // 4️⃣ Conectar a Google Sheets
    const sheets = await GoogleSheetConect();

    // 5️⃣ Enviar datos a la hoja
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
            new Date().toLocaleString(), // Fecha y hora
          ],
        ],
      },
    });

    // 6️⃣ Respuesta
    return NextResponse.json({ success: true, data: nuevo }, { status: 201 });
  } catch (error: any) {
    console.error("❌ Error en POST:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// =============================================
// 🔹 GET — Obtener registros de MongoDB
// =============================================
export async function GET() {
  try {
    await MongoConect();
    const registros = await ModelCampo.find();
    return NextResponse.json({ success: true, data: registros }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error en GET:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

