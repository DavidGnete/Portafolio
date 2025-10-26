import mongoose from "mongoose";
import { google } from "googleapis";
import path from "path";

const Mongo_URL = process.env.MONGO_DBURI;
if (!Mongo_URL) throw new Error(" Falta la variable MONGO_DBURI en .env.local");

export async function MongoConect() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(Mongo_URL);
      console.log("✅ Conectado a MongoDB");
    }
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    throw error;
  }
}

let sheetsInstance: ReturnType<typeof google.sheets> | null = null;
export async function GoogleSheetConect() {
  try {
    if (!sheetsInstance) {
      const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
      if (!keyFile) throw new Error("❌ Falta GOOGLE_APPLICATION_CREDENTIALS en .env.local");

      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), keyFile),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const client = await auth.getClient();
      sheetsInstance = google.sheets({ version: "v4", auth: client });

      console.log("✅ Conectado a Google Sheets");
    }

    return sheetsInstance;
  } catch (error) {
    console.error("❌ Error conectando a Google Sheets:", error);
    throw error;
  }
}

