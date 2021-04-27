import { GoogleAuth } from "google-auth-library";
import checkStudents from "./utils/student/checkStudents.js";
import getGoogleSheets from "./services/getGoogleSheets.js";
import updateSheet from "./updateSheet.js";
import {
  scopes,
  keyFile,
  spreadsheetId,
  sheetName,
} from "./utils/constants.js";

async function App() {
  const auth = new GoogleAuth({
    keyFile,
    scopes,
  });

  // Instance of Google Sheets API
  const googleSheets = await getGoogleSheets(auth);

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

  // Update Sheet
  updateSheet(
    StudentsSituationAndFinalExamScore,
    auth,
    spreadsheetId,
    sheetName
  );
}
App();
