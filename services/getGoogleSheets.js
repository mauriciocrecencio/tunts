import { google } from "googleapis";

export default async function getGoogleSheets(auth) {
  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });
  return googleSheets;
}
