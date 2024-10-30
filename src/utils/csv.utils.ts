const Parser = require('json-2-csv');

function isObject(variable: any): boolean {
  return typeof variable === 'object' && variable !== null;
}

export const buildCsv = async (data: any, fieldMapping: any = null) => {
  try {
    // Check if data is valid (not null or undefined)
    if (!data) {
      throw new Error('Input data is undefined or null');
    }

    // Create a deep copy of the data to ensure immutability
    const jsonData = JSON.parse(JSON.stringify(data));

    // Define CSV options based on field mapping
    let options = {};

    if (Array.isArray(fieldMapping)) {
      // array of db keys which will be used as CSV column headers
      options = { keys: fieldMapping };
    } else if (isObject(fieldMapping)) {
      // mapping db keys to specified CSV column headers if provided
      const fields = Object.keys(fieldMapping);
      const fieldMappings = fields.map((field: any) => ({
        label: fieldMapping[field],
        value: field,
      }));

      options = { keys: fields, prependHeader: true, emptyFieldValue: '' };
    }

    // Convert JSON to CSV using json-2-csv
    const csvData = await Parser.json2csv(jsonData, options);
    return csvData;
  } catch (error) {
    console.error('Error while building CSV:', error);
    return '';
  }
};
