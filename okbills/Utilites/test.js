let datetime = {

    licence: function () {
        let date = localStorage.getItem('date_time');
        let new_date = localStorage.getItem('date_time');
        let servertime = JSON.parse(localStorage.getItem('date_time'));
        console.log(`${servertime}:servertime`); 
        var server_time_in_int = parseInt(servertime)
        console.log(server_time_in_int);
        var expireTime = parseInt(server_time_in_int);
        //new_date = new Date(new_date).getTime();
        expireTime = new Date(expireTime);
        expireTime.setDate(expireTime.getDate() + 10);
        var expireTimeConvert = new Date(expireTime).getTime();
        console.log(`${server_time_in_int} :login time`);
        console.log(`${expireTimeConvert} : expire Time`);
        var d = new Date().getTime();
        console.log(`${d} : current date`)
        console.log(`${expireTime} :expire time human readable `);
        if(server_time_in_int >= d){
            swal({
                title: "Warning",
                text: "Your Trial Period Has Been Expired!",
                type: "warning",
                confirmButtonClass: "btn btn-danger",
                confirmButtonText: "Buy Now ",
                closeOnConfirm: false,
                allowEscapeKey: false,
                allowOutsideClick: false, 
              },
              function(){
                window.location = "../uicomponents/showplans.html";
              }); 
        } else{
            var x = setInterval(function() {

                // Get today's date and time
                var now = new Date().getTime();
              
                // Find the distance between now and the count down date
                var distance = expireTime - now;
              
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              $('#timer').html(' <button><a href="../uicomponents/showplans.html" style="position: fixed; bottom: 5px; right: 5px; " class="btn btn-pink  btn-block">Your trial period will expire in <br>'+days+ ' Days '+ hours +' Hours '+ minutes+' Miniutes '+ seconds +' Seconds </a> </button>')
                
                if (distance < 0) {
                  clearInterval(x);
                 $('#timer').hide();
                 swal({
                    title: "Warning",
                    text: "Your Trial Period Has Been Expired!",
                    type: "warning",
                    confirmButtonClass: "btn btn-danger",
                    confirmButtonText: "Buy Now ",
                    closeOnConfirm: false,
                    allowEscapeKey: false,
                    allowOutsideClick: false, 
                  },
                  function(){
                    window.location = "../uicomponents/showplans.html";
                  }); 
                }
              }, 1000);
        }
    }
}
module.exports = datetime;