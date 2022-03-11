//const sqlite3 = require('sqlite3').verbose();
let lcstrObj = require('../Utilites/localstorageconstant.js');
const dateobj = require('../Utilites/datetime.js');
//const DbConnection = require('../DBManager/connection.js');
const ourdomain = require('../Utilites/Domain.js');
const getplans = require('../Utilites/plans_utilities.js');
let product_code = 'okbills';
getplans.plans(product_code);
dateobj. licence();
//DbConnection.CreateConn();
const servertime = require('../Utilites/server_time.js')
servertime.stime();
console.log(servertime.stime())
