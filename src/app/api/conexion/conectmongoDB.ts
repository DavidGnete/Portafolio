import mongoose from "mongoose";
import { google } from "googleapis";
import path from "path";

const Mongo_URL = process.env.MONGO_DBURI;
if (!Mongo_URL) throw new Error(" mistake in url");

export async function MongoConect() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(Mongo_URL);
      console.log("conect to mongoDB");
    }
  } catch (error) {
    console.error("mistake whit mongoDB", error);
    throw error;
  }
}

let sheetsInstance: ReturnType<typeof google.sheets> | null = null;
export async function GoogleSheetConect() {
  try {
    if (!sheetsInstance) {
      const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
      if (!keyFile) throw new Error("mistake whit .env.local");

      const auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), keyFile),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const client = await auth.getClient();
      sheetsInstance = google.sheets({ version: "v4", auth: client });

      console.log("already in Google Sheets");
    }

    return sheetsInstance;
  } catch (error) {
    console.error("mistake whit google sheet", error);
    throw error;
  }
}

