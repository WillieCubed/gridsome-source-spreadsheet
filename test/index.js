const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { describe, it } = require('mocha');
const { SpreadsheetTransformer } = require('../dist');

const TEST_SHEET_NAME = path.join(__dirname, 'test_sheet.xlsx');

const EXPECTED_OUTPUT = {
  'Sheet1': [1, 2, 3, 4].map(i => ({
    column1: `data${i}a`,
    column2: `data${i}b`,
    column3: `data${i}c`,
  })),
};


describe('SpreadsheetTransformer', () => {
  describe('#parse', () => {
    it('Should convert a spreadsheet into a JSON array', () => {
      const file = fs.readFileSync(TEST_SHEET_NAME);
      const transformer = new SpreadsheetTransformer();
      const output = transformer.parse(file);
      assert.deepStrictEqual(output, EXPECTED_OUTPUT);
    });
  });
});
