import mongoose from "mongoose";
import { google } from "googleapis";
import path from "path";
import { GoogleAuth } from "google-auth-library";

// --- MongoDB ---
const Mongo_URL = process.env.MONGO_DBURI;
if (!Mongo_URL) throw new Error("MONGO_DBURI not defined");

export async function MongoConect() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(Mongo_URL!);
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// --- Google Sheets ---
let sheetsInstance: ReturnType<typeof google.sheets> | null = null;

export async function GoogleSheetConect() {
  try {
    if (!sheetsInstance) {
      const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
      if (!keyFile) throw new Error("GOOGLE_APPLICATION_CREDENTIALS not defined");

      const auth = new GoogleAuth({
        keyFile: path.join(process.cwd(), keyFile),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      // Pasa el auth directamente a sheets
      sheetsInstance = google.sheets({ version: "v4", auth });

      console.log("Connected to Google Sheets");
    }

    return sheetsInstance;
  } catch (error) {
    console.error("Error connecting to Google Sheets:", error);
    throw error;
  }
}

