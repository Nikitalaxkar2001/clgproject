const { type } = require("jquery");

function verify(){
		var getotp = localStorage.getItem('otp');
		console.log(getotp);
	let verify = $('#otpcheck').val()
	if(getotp == verify)
	{
		console.log('otp is correct');
		$('.hide-box').hide();
		$('.box').show();
	} 
	else{
		swal({
			title: 'Oops !',
			text:'Incorrect OTP',
			type: 'warning',
		});
		  $('.form-group').addClass('was-validated');
		//console.log('otp is invalied');
	}
	
}