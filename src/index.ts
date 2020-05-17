import * as XLSX from 'xlsx';

/**
 * A Gridsome transformer that converts spreadsheets into JSON format.
 */
export class SpreadsheetTransformer {
  static mimeTypes() {
    return [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];
  }
  /**
   * Converts a source file stream into an Excel spreadsheet.
   *
   * This converts a workbook file into an array containing array entries for
   * each sheet. Each array contains objects with keys corresponding to
   * the columns of the first row of the sheet.
   * 
   * @param {any} source The file input buffer
   * @return {object} A JSON object containing sheet data
   */
  parse(source: any): object {
    const workbook = XLSX.read(source);
    const sheets = workbook.SheetNames.map(name => ({
      [name]: XLSX.utils.sheet_to_json(workbook.Sheets[name]),
    }));
    const contents = sheets[0]; // Probably not the most semantic way to do this
    return contents;
  }
}