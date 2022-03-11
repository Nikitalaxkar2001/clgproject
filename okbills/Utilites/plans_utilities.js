let getplans = {
    plans :function(product_code){
        $.ajax({
            url: ourdomain.module.oklabsdomain +'/api/v1/get_plans?product_code='+product_code,
            data: '',
            type:'GET',
            success:function(result,status,xhr){
                console.log(result.plans);
                localStorage.setItem(lcstrObj.module.getplan,JSON.stringify(result.plans))
            }
        });
    }
}
module.exports = getplans ;