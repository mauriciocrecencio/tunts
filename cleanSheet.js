import getGoogleSheets from "./services/getGoogleSheets.js";
import { GoogleAuth } from "google-auth-library";
import {
  scopes,
  keyFile,
  spreadsheetId,
  sheetName,
} from "./utils/constants.js";

export default async function cleanSheet() {
  const auth = new GoogleAuth({
    keyFile,
    scopes,
  });
  const google = await getGoogleSheets(auth);

  await google.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range: `${sheetName}!G4:H`,
  });
}
cleanSheet();
