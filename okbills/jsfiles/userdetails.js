
const ourdomain = require('../Utilites/Domain.js');

$('.spinner-border').hide();
console.log(lcstrObj);
//globle variables

let companyname, fname, mname, lname,pwd, mob, email,osPlatform,gender,productCode, password, cpassword,deviceID, deviceName,osRelease,modelNo, deviceOs;
let save = () => {
  companyname = $('#company').val();
  fname = $('#fname').val();
  mname = $('#mname').val();
  lname = $('#lname').val();
  mob = $('.mobno').val();
  email = $('.email').val();
  gender = $('input[name=rdio]:checked').val();
  password = $('.password').val();
  cpassword = $('.cpassword').val();
  deviceName = osObject.deviceName;
  osRelease = osObject.osRelease;
  modelNo = osObject.modelNo;
  deviceOs = osObject.deviceOs;
  osPlatform = osObject.osPlatform
  deviceID = osObject.deviceID
  productCode = osObject.productCode
  pwd = osObject.pwd
  console.log( osObject.deviceID)
  
  if (companyname == " " || fname == "" || mob == " " || email == " " || password == "" || cpassword == " ") {
    notif({
      msg: "<b>Oops!</b> All fileds are required",
      type: "error",
      position: "center"
    });
    $('.form-group').addClass('was-validated');
  }
  else {
    var pattern = /^[a-zA-Z\s]+$/;
    let d = {
      'entityname': companyname,
      'fname': fname,
      'lname':lname,
      'mname':mname,
      'mob': mob,
      'email': email,
      'gender':gender,
      'deviceName':deviceName,
     ' osRelease' : osRelease,
      'modelNo' : modelNo,
      'password' : password,
      'deviceOs' : deviceOs,
      'osPlatform':osPlatform,
      'did' : deviceID,
      'pc':productCode,
      'pwd':pwd,
    };
    console.log(ourdomain.module.oklabsdomain);
    //Store all Details in Local Storage
    localStorage.setItem(lcstrObj.module.senddata, JSON.stringify(d));
    localStorage.setItem(lcstrObj.module.companyname, companyname);
    //Store Installtion Date & Time
    var today = new Date().getTime();
    //var today = new Date();
    localStorage.setItem(lcstrObj.module.datetime, today);
    //Send product details using ajax
    if(navigator.onLine){
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (companyname.match(pattern) && email.match(regex)) {
      if (password == cpassword) {
        $('.btnd').prop('disabled', true);
        $.ajax({
          url: ourdomain.module.oklabsdomain + '/api/v1/register_product',
          type: 'POST',
          data: d,
          beforeSend: function (xhr) {
            $('.spinner-border').show();
          },
          success: function (result, status, xhr) {
            console.log(result);
            localStorage.setItem(lcstrObj.module.servertime ,JSON.stringify(result.timestamp+'000'));
            $(location).attr('href','../uicomponents/multicompany.html');
            localStorage.setItem(lcstrObj.module.isProductRegistered, true);
            $('.btnd').prop('disabled', false);
          },
          error: function (xhr, status, error) {
            localStorage.setItem(lcstrObj.module.isProductRegistered, false);
            $(location).attr('href','../uicomponents/multicompany.html');
          }
        });
        notif({
          msg: "signin succesfully",
          type: "success"
        });
      }
      else {
        swal({
          title: 'Oops !',
          text: 'password and confirm password must be same',
          type: 'error',
        });
      }
    }
    else {
      notif({
        msg: "<b>Oops!</b> please enter valied details",
        type: "error",
        position: "center"
      })
    };
    }
    else{
      swal({
        title: 'Oops !',
        text: 'password and confirm password must be same',
        type: 'error',
      });
    }
    
  };
}