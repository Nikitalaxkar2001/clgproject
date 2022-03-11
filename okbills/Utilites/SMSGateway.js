
let apiotp={
    sendSMS :function(data){
     $.ajax({
         url: ourdomain.module.oklabsdomain +'/api/v1/sendsms',
         type: 'POST',
         data: data,
         success: function (result, status, xhr) {
            console.log(result);
         }
     })
    }
}
module.exports = apiotp ;

