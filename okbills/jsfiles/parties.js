var  coustmername,phoneno,email,address,country,city,religion,asDate,state,scoustmername,sphoneno,semail,saddress,scountry,scity,sstate,sreligion,sasDate,companyid,sessionid,partyid,ecoustmername,ephoneno,eemail,eaddress,ecountry,ecity,ereligion,easDate,estate,escoustmername,esphoneno,esemail,esaddress,escountry,escity,esstate,esreligion,esasDate
$('.partyFields').hide(); 
$('.coustmer-add-alert').hide(); 
companyid = localStorage.getItem('companyid')
sessionid = localStorage.getItem('Sessionid')
var dbse = new sqlite3.Database('./DBManager/okbills.db');
function addparty(){
  console.log('hello')
  coustmername = $('.coustmer').val();
  phoneno = $('.number').val();
  email = $('.eml').val();
  address = $('.billingaddress').val();
  country = $('.Country').val();
  city = $('.City').val();
  state = $('.state').val();
  religion = $('.religion').val();
  asDate = $('.adate').val();
  scoustmername = $('.scoustmer').val();
  sphoneno = $('.snumber').val();
  semail= $('.seml').val();
  saddress = $('.sbillingaddress').val();
  scountry = $('.sCountry').val();
  scity= $('.sCity').val();
  sstate = $('.sstate').val();
  sreligion = $('.sreligion').val();
  sasDate = $('.sasdate').val();
  console.log(sstate);

  if(coustmername == ""|| phoneno == ""|| email == ""){
    $('.partyFields').show('slow').delay(1000).hide('slow');
 }
 else{
 var db = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
 if(err){
     return console.error(err.message);
 }
 console.log('Connected to the in-memory SQlite database.');
 });
 db.run(`INSERT INTO Parties(Party,PhoneNo,Email,Date,Billingaddress,State,country,city,religion,shippingaddress,scity,scountry,shipingreligion,shippingdate,sParty,sPhoneNo,sEmail,sState,companyid,sessionid) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [coustmername,phoneno,email,asDate,address,state,country,city,religion,saddress,scity,scountry,sreligion,sasDate,scoustmername,sphoneno,semail,sstate,companyid,sessionid], function(err) {
  if (err) {
    return console.log(err.message);
  } 
  else{
    console.log('row has added')
    $('.coustmer-add-alert').show('slow').delay(1000).hide('slow');
    setTimeout(() => {
      $('#modaldemo30').modal('hide');
     $('.section').load('../uicomponents/section_components/section-parties.html');
    }, 1000);

  }
}); 
}
}

/* function editparty(){
  ecoustmername = $('.ecoustmer').val()
  ephoneno = $('.enumber').val();
  eemail = $('.eeml').val();
  eaddress = $('.ebillingaddress').val();
  ecountry = $('.eCountry').val();
  ecity = $('.eCity').val();
  estate = $('.estate').val();
  ereligion = $('.ereligion').val();
  easDate = $('.eadate').val();
  escoustmername = $('.escoustmer').val();
  esphoneno = $('.esnumber').val();
  esemail= $('.eseml').val();
  esaddress = $('.esbillingaddress').val();
  escountry = $('.esCountry').val();
  escity= $('.esCity').val();
  esstate = $('.esstate').val();
  esreligion = $('.esreligion').val();
  esasDate = $('.esasdate').val();
  console.log(ecity);
  
  var editsql = 'UPDATE  Parties SET Party = ?, PhoneNo = ?, Email = ?, Date = ?, Billingaddress = ? , State = ?, country = ? ,city = ?, religion = ?, shippingaddress = ?, scity = ?,scountry = ?, shipingreligion = ?, shippingdate = ?,sParty = ?, sPhoneNo = ?, sEmail = ?, sState = ?, WHERE id = ?'
  db.run( editsql, [ecoustmername, ephoneno, eemail, easDate, eaddress, estate, ecountry, ecity,ereligion, esaddress, escity, escountry, esreligion, esasDate, escoustmername, esphoneno, ,esstate, partyid],function(err,rows){
  if(err){
    throw err;
  }
  else{
       alert('data updated');
       $('#ecreadted_alert').show('slow').delay(1000).hide('slow');
  }
})   
} */

dbse.all('SELECT * FROM Parties WHERE companyid = ? ',[companyid],function(err, rows ) {
  var srno = 0;
rows.forEach(function(row,srno) {
  console.log(row)
  var srno = srno + 1;
  console.log(srno);
   var table = $('.manage_parties').DataTable();
   table.row.add([
      srno,
    row.Party,
    row.Billingaddress +" , "+row.city+" "+row.State+" "+row.country,
    row.Email,
    row.PhoneNo,
    `<a href="#" class="btn btn-sm btn-info tpButton" data-target="#modaldemo211" data-toggle="modal" href=""> EDIT
    <i class="las la-pen"></i>
</a> 
<a href="#" class="btn btn-sm btn-primary tpButton" data-target="#modaldemo211" data-toggle="modal" href=""> view
    <i class="fa fa-eye"></i>
</a>`
    ]).draw(false).node().id = row.id;
    $('table').on('click','.tpButton', function() {
      partyid = jQuery(this).closest('tr').attr('id');
     console.log(partyid);
  });
  });
}); 