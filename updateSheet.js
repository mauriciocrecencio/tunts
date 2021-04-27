import getGoogleSheets from "./services/getGoogleSheets.js";

export default async function updateSheet(
  StudentsSituationAndFinalExamScore,
  auth,
  spreadsheetId,
  sheetName
) {
  const googleSheets = await getGoogleSheets(auth);
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range: `${sheetName}!G4:H`,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: StudentsSituationAndFinalExamScore,
    },
  });
}
