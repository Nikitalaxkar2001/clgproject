var companyid = localStorage.getItem('companyid');
var sessionid = localStorage.getItem('Sessionid');
var srno;
var dbse = new sqlite3.Database('./DBManager/okbills.db');
dbse.all('SELECT * FROM suppliers WHERE companyid = ? AND sessionid = ?',[companyid,sessionid],function(err, rows ) {
    var srno = 0;
  rows.forEach(function(row,srno) {
    console.log(row)
     srno = srno + 1;
    console.log(srno);
    /* var table = */
    $('.manage_supplier').DataTable().row.add([
     srno,
     row.supp_name,
    row.supp_add,
    row.supp_email,
    row.supp_phone,
    `<a class="btn btn-sm btn-primary  tpButton"   data-effect="effect-scale" data-toggle="modal" href="#modaldemo8">
    <i class="las la-pen" >Edit</i>
  </a>
  <a href="#" class="btn btn-sm btn-info tpButton sviewbtn" data-target="#modaldemo3" data-toggle="modal" href="">
  <i class="fa fa-eye">View</i>
  </a> `
  ]).draw().node().id = row.id;
  $('table').on('click','.tpButton', function() {
  supplierid = jQuery(this).closest('tr').attr('id');
  localStorage.setItem(lcstrObj.module.supplierid, supplierid);
});    
});
}); 