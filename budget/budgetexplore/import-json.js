require('dotenv').config();
const nano = require('nano')(process.env.DB_HOST);
const dbUpdate = require('./db-update.js');
const budgetDB = nano.db.use(process.env.DATABASE);
budgetDB.update = dbUpdate;
const {log} = console;
const fs = require('fs');
log('start');


function saveItem(items) {
  if(items.length > 0){
    let item = items.shift();
    let id = [
      item.fiscal_year,
      item.agency_number,
      item.budget_code_number,
      item.object_class_number,
      item.object_code,
      item.unit_appropriation_number
    ];
    log(id);
    item.id= id.join('_');

    if(
      item.publication_date === '20160615'
      && parseInt(item.financial_plan_amount) > 0
    ) {
    // if(true){
      budgetDB.update(item, item.id, function (err, body) {
        if (err) {
          log(err);
        } else {
          saveItem(items);
        }
      });
    } else {
      setTimeout( function() {
        saveItem(items);
      }, 0 );
    }
  }
}

let filePath = './data/66mb-ky9b.json';
fs.readFile(filePath, 'utf-8', function (err, fileContents) {
  if (err) throw err;
  let items = JSON.parse(fileContents);

  saveItem(items);

  log(items[0]);
  log('done');
});


/*

function (doc) {
  var amount = parseInt(doc.financial_plan_amount);
  if((doc.publication_date === '20160615') && (amount > 0)) {
    emit([
      doc.agency_name,
      doc.financial_plan_amount,
      doc.object_class_name,
      doc.object_code_name
    ], amount);
  }
}
*/
