# Gridsome Spreadsheet Transformer Plugin

## Usage
The plugin converts workbook files into an arrays containing array entries for
each sheet. Each array contains objects with keys corresponding to
the columns of the first row of the sheet.

Installation:
```
npm install gridsome-transformer-spreadsheet
```

Add the plugin to your`gridsome.config.js` file should look like:
```
module.exports = {
  plugins: [
    {
      use: 'gridsome-transformer-spreadsheet',
    },
    // ...
  ],
};
```

## Development
Run `npm test` to run the tests.

After the tests pass, run `npm publish` to build and publish the package.
