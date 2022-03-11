function data() {

}
let lcstrObj = require('../Utilites/localstorageconstant.js');
const regObject = require('../Utilites/Registration.js');
const smsGObject = require('../Utilites/SMSGateway.js');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const osObject = require('../Utilites/osinfo.js');
function skipotp(){
	$('.alldetail').hide();
	$('.skip_box').hide();
	$('.box').show();
}
jQuery(function ($) {
	let companyname = localStorage.getItem('companyname');
	let cid = localStorage.getItem('isIDavaliable');
	if(cid != null){
		$(location).attr('href', '../uicomponents/dashboard.html');	
	}
	else{
	//Check if the Product is already Registred If yes then jump to dashboard directly
	if( companyname!= null ){
		$(location).attr('href', '../uicomponents/multicompany.html');	
	}
	else { 
		$('.verify').hide();
		$('.box').hide();
		$('.skip_box').hide();
		$('.submit').click(function () {
			$('.verify').show();
			$('.skip_box').show();
			$('.has-danger').focus();
			
			if (navigator.onLine){
				console.log('you are online');
				let mob = $('.mobno').val();
				if(mob.length<10 || mob.length>10 ){
					$('.otpcheck').hide();
					$('.skip_box').hide();
				}
				let country = $('div.flag').attr('class').split(' ')[1].toUpperCase();
				//console.log(country);
				let check =	phoneUtil.isValidNumberForRegion(phoneUtil.parse( mob, country), country);
				console.log(check);
				if(check == true ){
					notif({
						msg: "Please Enter your OTP",
						type: "success"
					});
					$('.otpcheck').show();
					$('.skip_box').show();
				}
				else {
					notif({
						msg: "Oops ! Invalid number please enter valid number",
						bgcolor: "#8500ff",
						color: "#fff",
						type: "error",
						position: "right"
					  })   
					$('.form-group').addClass('was-validated');
					console.log("enter valide number");
					$('.otpcheck').hide();
				}
				let otp = regObject.getRndInteger(1000, 9999);
				localStorage.setItem(lcstrObj.module.otp, otp);
				let msg = 'OTP is = ' + otp;
				let data = {
					'did' :osObject.deviceID,
					'to': mob,
					'msg':msg,
					'from':'OKBILLS',
				};
				smsGObject.sendSMS(data);
			}
			else
			{ 
				swal({
					title: 'Oops !',
					text:'please check your internet connection',
					type: 'warning',
				});
				$('.otpcheck').hide();
					$('.skip_box').hide();
				console.log('Internet is offline');

			}
		});
	}
}
	});

