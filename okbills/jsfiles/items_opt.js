var companyid = localStorage.getItem('companyid')
var sessionid = localStorage.getItem('Sessionid')
//var value;
var db1 = new sqlite3.Database('./DBManager/okbills.db');
$('#taxslab').hide();
$('#taxslabFields').hide();
$('#edit_taxslab').hide();
$('#etaxslabFields').hide();
$('#pro_comp').hide();
$('#Product_cmy').hide();
function taxslab()
{
    var tax_tittle = $('.taxtittle').val();
    var tax_per = $('.taxprs').val();
    var catogery = $('.catogery').val();
    var cess_per = $('.cess').val();
    var applicable = $('.applicable').val();
    var special_cess = $('.special_cs').val();
    var cess_asper = $('.asper').val();
    var calculation =$('input[name=checkbox]:checked').val();
    console.log(calculation);
    if(tax_tittle == ""|| tax_per == ""){
        $('#taxslabFields').show('slow').delay(1000).hide('slow');
    }
    else{
        var db1 = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
            if(err){
                return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
            });	
            db1.run(`INSERT INTO tax_rates(taxtittle,taxrates,catogery,cess_per,applicable,special_cess,cess_asper,calculation,company_id,session_id) VALUES(?,?,?,?,?,?,?,?,?,?)`, [tax_tittle ,tax_per,catogery,cess_per,applicable,special_cess,cess_asper,calculation,companyid,sessionid], function(err) {
                if (err) {
                  return console.log(err.message);
                }
                $('#taxslab').show('slow').delay(1000).hide('slow');
                setTimeout(() => {
                  $('#modaldemo1').modal('hide');
                 $('.section').load('../uicomponents/section_components/section_new_items.html');
                }, 1000);
                console.log('row has created');
              }); 
    }
}
$('#ptaxr').change(function(){
 value = $(this).val();
});
function addp_comp(){
  var pro_company = $('.product_company').val();
  if(pro_company == ''){
    $('#pro_comp').show('slow').delay(1000).hide('slow');
  }
  else{
    var db1 = new sqlite3.Database('./DBManager/okbills.db',(err)=> {
      if(err){
          return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
      });	
      db1.run(`INSERT INTO product_company(product_company,companyid,sessionid) VALUES(?,?,?)`, [pro_company,companyid,sessionid], function(err) {
        if (err) {
          return console.log(err.message);
        }
        $('#Product_cmy').show('slow').delay(1000).hide('slow');
        setTimeout(() => {
          $('#modaldemo3').modal('hide');
         $('.section').load('../uicomponents/section_components/section_new_items.html');
        }, 1000);
        console.log('row has created');
      }); 
  }
}
function edittax() { 
  var value = $('#ptaxr')[0].value;
   console.log(value);
   db1.all(`SELECT * FROM tax_rates WHERE taxrates = ? AND company_id = ? AND session_id = ?` ,[value, companyid, sessionid] ,function(err,row){
    if(err){
      console.log(err);
    }
    rows.forEach(row => {
     console.log(row);
   });
   })
}
