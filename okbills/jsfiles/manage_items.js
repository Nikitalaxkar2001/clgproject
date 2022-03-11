/* const sqlite3 = require('sqlite3').verbose(); */
var companyid , sessionid,itemidty,items_id
var item_name,item_hsc,item_code,sale,stax,purchase,ptax,itemloc,openingstk,atprice,minstk,tax_rate,date,image,basic_unit, sec_unit,product_carogery,staxrate,ptaxrate,companyid,sessionid,id

companyid = localStorage.getItem('companyid')
sessionid = localStorage.getItem('Sessionid')
var db8 = new sqlite3.Database('./DBManager/okbills.db');
function edititems(){
    console.log('hello');
    item_name= $('#eitemname').val();
    item_hsc= $('#eitemhsc').val();
    product_carogery = $('#ecategory').val();
    item_code=  $('#eitemcode').val();
    sale=  $('#esaleprice').val();
    stax=  $('#estax').val();
    staxrate =$('#estaxr').val();
    purchase=  $('#epurchaseprice').val();
    ptax=  $('#eptax').val();
    ptaxrate = $('#eptaxr').val();
    itemloc=  $('#eitemloc').val();
    openingstk=  $('#eopenings').val();
    atprice=  $('#epriceunit').val();
    minstk=  $('#eminstock').val();
    date=  $('#ecdate').val();
    
    if(item_name==""|| date==""){
        $('#eifildes').show('slow').delay(1000).hide('slow');
        $('.formcontrol').addClass('was-validated');
        console.log('fildes are required');
      }
      else{
        var editsql = 'UPDATE  items SET itemname = ?, itemhsc = ?, itemcode = ?, saleprice = ?,stax = ? ,purchase = ?, ptax = ? ,itemloc = ?, openingstk = ?, atprice = ?, minstk = ?,staxrate = ?, ptaxrate = ?, date = ?,productcatogery = ? WHERE id = ?'
        db.run( editsql, [item_name, item_hsc, item_code, sale, stax, purchase, ptax, itemloc,openingstk, atprice, minstk, staxrate, ptaxrate, date, product_carogery, id],function(err,rows){
        if(err){
          throw err;
        }
        else{
             alert('data updated');
             $('#ecreadted_alert').show('slow').delay(1000).hide('slow');
                /*   setTimeout(() => {
                    $(location).attr('href', '../uicomponents/multicompany.html');	
                  }, 1000);  */
         }
        })   
      }
}

function delete_item()
{    
    let id = 12;
// delete a row based on id
var delete_item = 'DELETE FROM items WHERE id=?'
db8.run(delete_item,[items_id], function(err,row) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) deleted ${this.changes}`);
  setTimeout(() => {
    $('.section').load('../uicomponents/section_components/section_manageitem.html');
  }, 1000);
});
    console.log('it is working');
}
var dbase = new sqlite3.Database('./DBManager/okbills.db');
 dbase.all('SELECT * FROM product_catogery',function(err, rows ) {
  rows.forEach(function(row) {
     console.log(row)
  $('#ecategory').append(` <option id="${row.id}" value="${row.catogeryname}"> ${row.catogeryname} </option>`)
      });
 });
 dbase.all('SELECT * FROM unit',function(err, rows ) {
  rows.forEach(function(row) {
      console.log(row)
      $('#epriceunit').append(` <option > ${row.firstname}</option>`)
      });
  });      
