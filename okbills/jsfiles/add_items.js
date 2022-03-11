var item_name,item_hsc,item_code,sale,stax,purchase,ptax,itemloc,openingstk,atprice,minstk,tax_rate,date,image,basic_unit, sec_unit
$('#Fields').hide();
function additems(){
    item_name= $('#itemname').val();
    item_hsc= $('#itemhsc').val();
    item_code=  $('#itemcode').val();
    sale=  $('#saleprice').val();
    stax=  $('#stax').val();
    purchase=  $('#purchaseprice').val();
    ptax=  $('#ptax').val();
    itemloc=  $('#itemloc').val();
    openingstk=  $('#openings').val();
    atprice=  $('#priceunit').val();
    minstk=  $('#minstock').val();
    tax_rate=  $('#taxrate').val();
    date=  $('#cdate').val();
    image = $('#image').val();
    basic_unit= $('#basicunit').val();
    sec_unit = $('#seconderyunit').val();
    console.log(purchase);
    if(item_name==""|| item_hsc==""|| item_code=="" ||sale==""||stax==""||purchase==""||ptax==""||itemloc==""||openingstk==""|| atprice==""|| minstk==""||tax_rate==""||date=="")
    {
      $('#Fields').show('slow').delay(1000).hide('slow');
    }
    else{
    var db1 = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
    });	
    db1.run(`INSERT INTO items(itemname,itemhsc,itemcode,saleprice,stax,purchase,ptax,itemloc,openingstk,atprice,minstk,selecttax,date,image) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [item_name,item_hsc,item_code,sale,stax,purchase,ptax,itemloc,openingstk,atprice,minstk,tax_rate,date,image], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log('row has created');
  }); 
}
}
var db2 = new sqlite3.Database('./DBManager/okbills.db');
db2.all('SELECT * FROM items',function(err, rows ) {
rows.forEach(function(row) {
    console.log(row)
    $('#itemsdata').append(`  <tr>
    <td>${row.id}</td>
    <td>${row.itemname}</td>
    <td>${row.itemname}</td>
    <td>${row.date}</td>
    <td>${row.itemname}</td>
    <td>${row.itemname}</td>
    <td>${row.itemname}</td>
</tr>`);
                                           
    });
});  
var db3 = new sqlite3.Database('./DBManager/okbills.db');
db3.all('SELECT * FROM unit',function(err, rows ) {
   rows.forEach(function(row) {
       console.log(row)
       if(err){
        return console.error(err.message);
       }
       else{
        $('#unitdata').append(`<tr><td>${row.firstname}</td><td>${row.shortname}</td></tr>`);
        console.log('data inserted')
       }
       });
   });  
   $('#alert').hide();
   function adjust_item(){
    $('#alert').show('slow').delay(1000).hide('slow');
   }