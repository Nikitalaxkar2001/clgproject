var Database = new sqlite3.Database('./DBManager/okbills.db');
var partydetails
function addsale(){
   
}
 $(document).ready(function(){
  $("#addrow").click(function(){
      $("#example-delete1").append(` <tr>
      <td>  <input class="form-control form-control-sm items" required="" id="items" name="item" type="text"></td>
      
      <td>  <input class="form-control form-control-sm qty" required="" id="qty" name="qty" type="text"></td>
      
      <td><select class="SlectBox form-control form-control-sm tax unit1" id="unit1" required>
      <option> SQUARE METER </option>
   </select></td>
      <td>  <input class="form-control form-control-sm amountofitem" required="" id="amountofitem" name="itmamt" type="number"></td>   
       <td>  <input class="form-control form-control-sm per" required="" id="per" name="itmamt" type="number">
          </td>
      
      <td>  <input class="form-control form-control-sm show" name="tax" required="" id="show" type="number"></td>
      
      <td><input class="form-control form-control-sm disshow" name="tax" required="" id="disshow" type="number"></td>
      
      <td>  <input class="form-control form-control-sm totamt" id="totamt" required="" name="totamt" type="number"></td>
      </tr>`);
     /*  $("#remCF").on('click',function(){
          $(this).parent().parent().remove();
      }); */
  });
}); 
function calculate() {

}
$('#genrate').click(function(){
  //total.value = myResult1;
})
$(document).ready(function(){
  $('.amountofitem').keyup(calculate);
  $('.per').keyup(calculate);
  $('.qty').keyup(calculate);
  $('.disshow').keyup(calculate);
});
function calculate(e)
{
  var total = $('.qty').val() * $('.amountofitem').val();
  var taxp = ( total * $('.per').val()/100);
  $('.show').val( total * $('.per').val()/100);
  var dis = ( total * $('.disshow').val()/100);
  $('.totamt').val((total - dis) + taxp );
  console.log(dis);
 console.log(total);
 console.log(taxp)

 
}

            Database.all('SELECT * FROM Parties',function(err, rows ) {
            rows.forEach(function(row) {
            console.log(row)
            $('#party').append(` <option class="dropdownitems" id="${row.id}" value ="${row.Party}"> ${row.Party}</option>`)
            });
            }); 

            Database.all('SELECT * FROM unit',function(err, rows ) {
            rows.forEach(function(row) {
            console.log(row)
            $('.unit1').append(` <option > ${row.firstname}</option>`)
            });
            });   

           /*  Database.all('SELECT * FROM unit',function(err, rows ) {
              rows.forEach(function(row) {
              console.log(row)
              $('#unit2').append(` <option > ${row.firstname}</option>`)
              });
              });    */
            Database.all('SELECT * FROM unit',function(err, rows ) {
            rows.forEach(function(row) {
            console.log(row)
            $('.SlectBox2').append(` <option > ${row.firstname}</option>`)
            });
            });     
             Database.all('SELECT * FROM tax_rates',function(err, rows ) {
            rows.forEach(function(row) {
            console.log(row)
            $('#taxp').append(` <option > ${row.taxrates}</option>`)
            });
            });     
            Database.all('SELECT * FROM tax_rates',function(err, rows ) {
            rows.forEach(function(row) {
            console.log(row)
            $('#disp').append(` <option > ${row.taxrates}</option>`)
           
            });
            }); 
            $("#party").on('change', function () {
            partydetails = ($(this).find('option:selected').attr('id'));
         // alert(partydetails)
             });  
            $( "#party" ).change(function() {
           
            //console.log( "Handler for .change() called." );
            Database.all('SELECT * FROM Parties WHERE id = ? ',[partydetails],function(err, rows ) {
                 rows.forEach(function(row){
                  var show =  $('#show_Party_details').append(`<div>Name : -${row.Party}</div><div>Contact :- ${row.PhoneNo}</div><div>Email :- ${row.Email}</div><div>Address :- ${row.Billingaddress}</div>`);
                  $('.show_Party_details').removeClass("show_Party_details"); 
                })
            })
    
          });

         ` <option> SQUARE METER </option>
          <option> BAGES</option>
          <option>BOX</option>
          <option> BUNDULES </option>
          <option>  CANS </option>
          <option>CARTONS </option>
          <option>    DOZENS </option>
          <option>   GRAMMES </option>
          <option>   KILOGRAMS </option>
          <option>   LITER </option>
          <option>   METERS </option>
          <option>   MILILTER </option>
          <option>   NUMBERS </option>
           <option>  PACKS </option>
          <option>  PAIRS </option>
          <option>  PIECES </option>
          <option> QUINTAL </option>
          <option> ROLLS </option>
          <option> SQUARE FEET </option>
          <option> SQUARE METER </option>
          <option>  TABLETS </option>` 