var item_name,item_hsc,item_code,sale,stax,purchase,ptax,itemloc,openingstk,atprice,minstk,tax_rate,date,image,basic_unit, sec_unit,product_carogery,staxrate,ptaxrate,companyid,sessionid,product_company,taxslab1,deft_dis, item_des;
var dbase = new sqlite3.Database('./DBManager/okbills.db');
   dbase.all('SELECT * FROM product_catogery',function(err, rows ) {
   rows.forEach(function(row) {
     console.log(row)
   $('#category').append(` <option id="${row.id}" value="${row.catogeryname}"> ${row.catogeryname} </option>`)
      });
   }); 
   dbase.all('SELECT * FROM tax_rates',function(err, rows ) {
    rows.forEach(function(row) {
       console.log(row)
    $('#ptaxr').append(` <option id="${row.id}"> ${row.taxrates} </option>`)
        });
   }); 
   dbase.all('SELECT * FROM unit',function(err, rows ) {
      rows.forEach(function(row) {
          console.log(row)
          $('#priceunit').append(` <option > ${row.firstname}</option>`)
          });
      });     
      dbase.all('SELECT * FROM product_company',function(err, rows ) {
         rows.forEach(function(row) {
             console.log(row)
             $('#Pcompany').append(` <option > ${row.product_company}</option>`)
             });
         });     
   dbase.all('SELECT * FROM tax_rates',function(err, rows ) {
    rows.forEach(function(row) {
       console.log(row)
    $('#staxr').append(` <option id="${row.id}"> ${row.taxrates} </option>`)
        });
   }); 
   $('#staxbox').show();
   $('#Fields').hide();
   $('#itemcreated').hide();
   function additems(){
    item_name= $('#itemname').val();
    item_hsc= $('#itemhsc').val();
    product_company = $('#Pcompany').val();
    product_carogery = $('#category').val();
    item_code=  $('#itemcode').val();
    sale=  $('#saleprice').val();
    purchase=  $('#purchaseprice').val();
    taxslab1 = $('#ptaxr').val();
    itemloc=  $('#itemloc').val();
    openingstk=  $('#openings').val();
    atprice=  $('#priceunit').val();
    minstk=  $('#minstock').val();
    date=  $('#cdate').val();
    image = $('#image').val();
    deft_dis = $('#def-dis').val();
    item_des = $('#itemdis').val();
    companyid = localStorage.getItem('companyid')
    sessionid = localStorage.getItem('Sessionid')
    console.log(purchase);
    if(item_name==""|| item_hsc==""|| item_code=="" ||sale==""||purchase==""||itemloc==""||openingstk==""|| atprice==""|| minstk=="")
    {
      $('#Fields').show('slow').delay(1000).hide('slow');
      $('.formcontrol2').addClass('was-validated');
    }
    else{
    var db1 = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
    });	
    staxrate =$('#staxr').val();
    staxrate =$('#staxr').val();
    companyid = localStorage.getItem('companyid')
    db1.run(`INSERT INTO items(itemname,itemhsc,itemcode,saleprice,purchase,itemloc,openingstk,atprice,minstk,date,productcompany,taxslab,image,productcatogery,def_discount,item_dis,companyid,sessionid) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [item_name,item_hsc,item_code,sale,purchase,itemloc,openingstk,atprice,minstk,date,product_company,taxslab1,image,product_carogery,deft_dis,item_des,companyid,sessionid], function(err) {
    if (err) {
      return console.log(err.message);
    }
    $('#itemcreated').show('slow').delay(1000).hide('slow');
    setTimeout(() => {
      $('.section').load('../uicomponents/section_components/section_new_items.html');
    }, 1000);
    console.log('row has created');
  }); 
   }
}
