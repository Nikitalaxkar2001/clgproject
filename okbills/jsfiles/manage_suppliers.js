/* var srno
var companyid = localStorage.getItem('companyid')
var sessionid = localStorage.getItem('Sessionid')
var db8 = new sqlite3.Database('./DBManager/okbills.db');
db8.all('SELECT * FROM suppliers WHERE companyid = ? AND sessionid = ?',[companyid,sessionid],function(err, rows ) {
    var srno = 0;
rows.forEach(function(row2,srno) {
    console.log(row2)
     srno = srno + 1;
    console.log(srno);
     var table = $('.manage_suppliers').DataTable();
     table.row2.add([
      srno,
      row2.supp_name,
      row2.supp_add,
      row2.supp_email,
      row2.supp_phone,
    `<a href="#" class="btn btn-sm btn-info tpButton" data-target="#modaldemo21" data-toggle="modal" href="">
      <i class="las la-pen"></i>
      </a> <a href="#" class="btn btn-sm btn-danger tpButton" id="idbtn" data-target="#modaldemo50" data-toggle="modal" href="" >
     <i class="las la-trash"></i>
     </a>`
      ]).draw(false).node().id = row.id;
      $('table').on('click','.tpButton', function() {
       id = jQuery(this).closest('tr').attr('id');
      console.log(id);
    });
    });
  });  */

var srno
var companyid = localStorage.getItem('companyid')
var sessionid = localStorage.getItem('Sessionid')
var db8 = new sqlite3.Database('./DBManager/okbills.db');
db8.all('SELECT * FROM suppliers WHERE companyid = ? AND sessionid = ?',[companyid,sessionid],function(err, rows ) {
    var srno = 0;
  rows.forEach(row => {
   /*  console.log(row);
    srno = srno + 1;
    console.log(srno); */
  $(document).ready(function () {
    srno = srno + 1;
    var table = $('.manage_suppliers').DataTable();
    table.row.add( [
      srno,
      row.supp_name,
      row.supp_add,
      row.supp_email,
      row.supp_phone,
      `<a href="#" class="btn btn-sm btn-info tpButton" data-target="#modaldemo21" data-toggle="modal" href="">
      <i class="las la-pen"></i>
      </a> <a href="#" class="btn btn-sm btn-danger tpButton" id="idbtn" data-target="#modaldemo50" data-toggle="modal" href="" >
     <i class="las la-trash"></i>
     </a>`
    ] ).draw()(false).node().id = row.id;
    $('table').on('click','.tpButton', function() {
      id = jQuery(this).closest('tr').attr('id');
     console.log(id);
   });
  });
});
});