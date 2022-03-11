$('#product_alert').hide();
$('#product_fildes').hide();
var catogery_name,catogery_des,companies_id,session_id
function catogery(){
    catogery_name = $('#catogeryname').val();
    catogery_des = $('#catogerydes').val();
    companies_id = localStorage.getItem('companyid');
    session_id = localStorage.getItem('Sessionid')
    console.log(catogery_name);
    let db = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
        if(err){
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
        });
        if(catogery_name==""||catogery_des==""){
          $('#product_fildes').show('slow').delay(1000).hide('slow');
        }
        else{
          var product_query = `INSERT INTO product_catogery(catogeryname,catogerydescription,companyid,sessionid) VALUES(?,?,?,?)` 
        db.run(product_query, [catogery_name,catogery_des,companies_id,session_id], function(err) {
            if (err) {
              return console.log(err.message);
            }
            $('#product_alert').show('slow').delay(1000).hide('slow');
            setTimeout(() => {
              $('#modaldemo98').modal('hide');
             $('.section').load('../uicomponents/section_components/section_product_catogery.html');
            }, 1000);
          });
        }
        
           
         	

}