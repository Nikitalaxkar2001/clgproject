var Database = new sqlite3.Database('./DBManager/okbills.db');
var partydetails
function addsale() {

}
$(document).ready(function () {
  $("#addrow").click(function () {
    $("#example-delete1").append(`<tr>
      <td>    <select id="items" class="form-control form-control-sm select2 selectpicker" style="width: 150px;">
      </select>
      
      <td>  <input class="form-control form-control-sm qty" required="" id="qty" name="qty" type="text"></td>
      
      <td> <select class="SlectBox form-control form-control-sm tax unit1" id="unit1" required>
      <option>SQUARE METER</option>
      <option>BAGES</option>
      <option>BOX</option>
      <option>BUNDULES </option>
      <option>CANS</option>
      <option>CARTONS</option>
      <option>DOZENS</option>
      <option>GRAMMES</option>
      <option>KILOGRAMS</option>
      <option>LITER</option>
      <option>METERS</option>
      <option>MILILTER</option>
      <option>NUMBERS</option>
      <option>PACKS</option>
      <option>PAIRS</option>
      <option>PIECES</option>
      <option>QUINTAL</option>
      <option>ROLLS</option>
      <option>SQUARE FEET</option>
      <option>SQUARE METER</option>
      <option>TABLETS</option>
      <option>BOTTALS</option>
   </select></td>

      <td>  <input class="form-control form-control-sm amountofitem ppi" required="" id="amountofitem" name="itmamt" type="number"></td>   
       <td>  <input class="form-control form-control-sm per" required="" id="per" name="itmamt" type="number">
      </td>
      
      <td>  <input class="form-control form-control-sm taxshow" name="tax" required="" id="show" type="number"></td>
      
      <td><input class="form-control form-control-sm disper" name="tax" required="" id="disshow" type="number"></td>
      
      <td>  <input class="form-control form-control-sm totamt" id="totamt" required="" name="totamt" type="number"></td>
      </tr>`);
  });
});

$(document).on('keyup', '.ppi', calculate);
$(document).on('keyup', '.qty', calculate);
$(document).on('keyup', '.per', calculate);
$(document).on('keyup', '.disper', calculate);
function calculate(e) {
  var qty = $(this).closest('tr').find('.qty').val();
  var ppi = $(this).closest('tr').find('.ppi').val();
  var per = $(this).closest('tr').find('.per').val();
  var disper = $(this).closest('tr').find('.disper').val();
  var item_amt = parseFloat(qty) * parseFloat(ppi);
  var taxper = (parseFloat(per) * parseFloat(item_amt)) / 100
  var discountper = (parseFloat(disper) * parseFloat(item_amt)) / 100
  var totalamt = (parseFloat(item_amt) - parseFloat(taxper)) + parseFloat(discountper);
  $(this).closest('tr').find('.taxshow').val(taxper);
  $(this).closest('tr').find('.totamt').val(totalamt);
}
Database.all('SELECT * FROM Parties', function (err, rows) {
  rows.forEach(function (row) {
    console.log(row)
    $('#party').append(` <option class="dropdownitems" id="${row.id}" value ="${row.Party}"> ${row.Party}</option>`)
  });
});

Database.all('SELECT * FROM items', function (err, rows) {
  rows.forEach(function (row) {
    console.log(row)
    $('.selectpicker').append(` <option id="${row.id}" value ="${row.itemname}"> ${row.itemname}</option>`)
  });
});

Database.all('SELECT * FROM unit', function (err, rows) {
  rows.forEach(function (row) {
    console.log(row)
    $('.unit1').append(` <option > ${row.firstname}</option>`)
  });
});

Database.all('SELECT * FROM unit', function (err, rows) {
  rows.forEach(function (row) {
    console.log(row)
    $('.unit1').append(` <option > ${row.firstname}</option>`)
  });
});

Database.all('SELECT * FROM tax_rates', function (err, rows) {
  rows.forEach(function (row) {
    console.log(row)
    $('#taxp').append(` <option > ${row.taxrates}</option>`)
  });
});

Database.all('SELECT * FROM tax_rates', function (err, rows) {
  rows.forEach(function (row) {
    console.log(row)
    $('#disp').append(` <option > ${row.taxrates}</option>`)
  });
});


$("#party").on('change', function () {
  partydetails = ($(this).find('option:selected').attr('id'));
});

$("#party").change(function () {
  Database.all('SELECT * FROM Parties WHERE id = ? ', [partydetails], function (err, rows) {
    rows.forEach(function (row) {
      var show = $('#show_Party_details').html(`<div>Name : -${row.Party}</div><div>Contact :- ${row.PhoneNo}</div><div>Email :- ${row.Email}</div><div>Address :- ${row.Billingaddress}</div>`);
    })
  })
});

