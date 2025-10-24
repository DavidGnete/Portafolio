// src/app/api/campos/route.ts
import { NextResponse } from "next/server";
import ModelCampo from "../modelos/modelbd";
import { MongoConect } from "../conexion/conectmongoDB";

export async function POST(req: Request) {
  await MongoConect();
  const body = await req.json();
  const nuevo = await ModelCampo.create(body);

  return NextResponse.json({ success: true, data: nuevo }, { status: 201 });
}

export async function GET() {
  await MongoConect();
  const formulario = await ModelCampo.find();

  return NextResponse.json({ success: true, data: formulario }, { status: 200 });
}
