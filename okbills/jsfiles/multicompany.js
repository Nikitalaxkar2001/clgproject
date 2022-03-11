$('#cfildes').hide();
$('#creadted_alert').hide();
$('#walert').hide();
$('#malert').hide();
$('#ecfildes').hide();
$('#ewalert').hide();
$('#emalert').hide();
$('#ecreadted_alert').hide();
const sqlite3 = require('sqlite3').verbose();
let companyname,address,city,pincode,state,mobileno,website,phoneno,email,tax,bookstart,closebook,image,username,password,ecompany ,emobno , esdate , ecdate , eweb , eemail ,euser ,epass , estate,ecity ,etax ,eaddress,epin
var pattern = /^[a-zA-Z\s]+$/;
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function create(){
    companyname = $('#companyn').val();
    address = $('#address').val();
    city = $('#city').val();
    pincode = $('#pin').val();
    state = $('#state').val();
    mobileno = $('#mobile-number').val();
    website = $('#website').val();
    phoneno = $('#phone').val();
    email = $('#email').val();
    tax = $('#tax').val();
    bookstart = $('#year').val();
    image= $('#image').val();
    username = $('#username').val();
    password = $('#pass').val();

    if(companyname==""|| username==""){
      $('#cfildes').show('slow').delay(1000).hide('slow');
      $('.formcontrol').addClass('was-validated');
    }
    else{
      if(companyname.match(pattern)){
        let db = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
          if(err){
              return console.error(err.message);
          }
          console.log('Connected to the in-memory SQlite database.');
          });	
          db.run(`INSERT INTO company_details(companyname,address,city,pincode,state,mobileno,website,phoneno,email,tax,bookstart,image,username,password) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [companyname , address, city, pincode,state, mobileno, website, phoneno, email,tax,bookstart,image,username,password], function(err) {
            if (err) {
              return console.log(err.message);
            }
            let session = $('#year').val();
            console.log(session);
           let sql = 'SELECT id FROM session WHERE FinancialYear = ?' ;
           db.all(sql,[session],function(err,rows){
               rows.forEach(function(row) {
                   console.log(row)
                   let financialYear = row.id
                   localStorage.setItem('Sessionid',financialYear);
                   let show = localStorage.getItem('Sessionid');
                   let session = $('#year').val();
                   localStorage.setItem('financialYear',session);
               })
              })
            $('#creadted_alert').show('slow').delay(1000).hide('slow');
            setTimeout(() => {
              $(location).attr('href', '../uicomponents/multicompany.html');	
            }, 1000);
          }); 
      }
    else{
      $('#walert').show('slow').delay(1000).hide('slow');
    } 
}
}

$('#Fields').hide();
$('#incorrect').hide();
function login(){
  console.log('hello');
   let user = $('#user').val();
   let pass = $('#pass').val();
   let cid = localStorage.getItem('companyid');
   let db = new sqlite3.Database('./DBManager/okbills.db');
   let sql = ('SELECT * FROM company_details WHERE username = ? AND password = ? AND id = ?') ;
   db.all(sql,[user,pass,cid],function(err,rows){
     if(err)
    {
      throw err;
    }
     else {
       if(user ==""|| pass == ""){
        $('#Fields').show('slow').delay(1000).hide('slow');
       }
       else{
        if(rows == 0){
          $('#incorrect').show('slow').delay(1000).hide('slow');
         }
         else{
          localStorage.setItem('isIDavaliable',JSON.stringify(rows))
         // JSON.stringify(localStorage.setItem('isIDavaliable',rows));
          $(location).attr('href', '../uicomponents/dashboard.html');
           console.log('correct');
         }
       }
     }
   });
}
 function edit(){
  ecompany = $('#ecompany').val();
  eweb = $('#ewebsite').val();
  eemail =$('#eemail').val();
  euser = $('#euser').val();
  epass = $('#epass').val(); 
  estate= $('#estate').val();
  ecity = $('#ecity').val();
  etax = $('#etax').val();
  eaddress = $('#eaddress').val();
  epin = $('#epin').val();
  console.log(ecompany);
 console.log('hello');
 if(ecompany==""|| euser==""){
  $('#ecfildes').show('slow').delay(1000).hide('slow');
  $('.formcontrol').addClass('was-validated');
}
else{
  var cid = localStorage.getItem('companyid');
  var editsql = 'UPDATE  company_details SET companyname = ?, address = ?, city = ?, pincode = ?, state = ?,website = ?, email = ?, tax = ?, username = ?, password = ? WHERE id = ?'
  db.run( editsql,[ecompany, eaddress, ecity, epin, estate, eweb, eemail, etax, euser, epass, cid],function(err,rows){
  if(err){
    throw err;
  }
  else{

  $('#ecreadted_alert').show('slow').delay(1000).hide('slow');
            setTimeout(() => {
              $(location).attr('href', '../uicomponents/multicompany.html');	
            }, 1000);
  }
})   
}

} 