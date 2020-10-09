var GoogleSpreadsheet = require('google-spreadsheet');
const {promisify} = require('util');
creds = require('../client_secret.json');
var config = require("./config.js");



async function filterData(filterObj, googleDocId) {
    const doc = new GoogleSpreadsheet(googleDocId);
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    let data = [];
  
    try {
        for (let i = 0; i < info.worksheets.length; i++) {
            let sheet = info.worksheets[i];
            let queryStr = '(bienso = ' + filterObj.token +  ')' + (filterObj.month ? ' & month = ' + filterObj.month : '')
            data = await promisify(sheet.getRows)({
                offset: 1,
                limit: 200,
                query: queryStr
            });
        }
    } catch (error) {
        console.log(error);
    }
    return data;
}

async function addRow(row) {
    const doc = new GoogleSpreadsheet(docId);
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();

    try{
        var sheet = info.worksheets[3];
        await promisify(sheet.addRow)(row);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    filterData,
    addRow
}
