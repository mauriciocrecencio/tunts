import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import checkStudents from "./utils/student/checkStudents.js";
// If modifying these scopes, delete token.json.
const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

const keyFile = "credentials.json";
const spreadsheetId = "1F1z3g8zm5R4Eh1lvPoTlcd33EI000CY9rOSbzZnunao";
const sheetName = "engenharia_de_software";

async function App() {
  const auth = new GoogleAuth({
    keyFile,
    scopes,
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  // Get rows of our sheets
  const getStudentsData = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: `${sheetName}!B4:F`,
  });

  // Checks students situation and return a new array with these students and their situations
  const StudentsSituationAndFinalExamScore = checkStudents(
    getStudentsData.data.values
  );
}
App();
