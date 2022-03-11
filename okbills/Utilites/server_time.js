let server_time={
    stime :function(){
        if (navigator.onLine){
            $.ajax({
                url: ourdomain.module.oklabsdomain +'/api/v1/gst',
                type: 'GET',
                success: function (result, status, xhr) {
                   console.log(result);
                   localStorage.setItem(lcstrObj.module.server_upDate_time ,JSON.stringify(result.timestamp+'000'));
                }
            })
           }
           else{
               console.log('offline');
               alert('offline');
           }
        }
}
module.exports =  server_time;