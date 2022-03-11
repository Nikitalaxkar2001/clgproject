 let db2 = new sqlite3.Database('./DBManager/okbills.db');
 db2.all('SELECT * FROM session',function(err, rows ) {
  rows.forEach(function(row) {
     console.log(row)
  $('#year').append(` <option id="${row.id}" value="${row.FinancialYear}"> ${row.FinancialYear} </option>`)
      });
 }); 

let db = new sqlite3.Database('./DBManager/okbills.db');
db.all('SELECT * FROM company_details',function(err, rows ) {
rows.forEach(function(row) {
    console.log(row)
    let session = localStorage.getItem('financialYear')
    var table = $('#example4').DataTable();
    table.row.add([
        `<img alt="avatar" class="rounded-circle avatar-md mr-2" src="../images/talk.gif">`,
        row.companyname,
        session,
        row.email,
        row.mobileno,
        `<a class="btn btn-sm btn-primary tpButton"   data-effect="effect-scale" data-toggle="modal" href="#modaldemo8">
        <i class="las la-lock" ></i>
    </a>
    <a href="#" class="btn btn-sm btn-info tpButton" data-target="#modaldemo3" data-toggle="modal" href="">
    <i class="las la-pen"></i>
    </a>`
   
     ]).draw().node().id = row.id;
                                             $('table').on('click','.tpButton', function() {
                                              var id = jQuery(this).closest('tr').attr('id');
                                              localStorage.setItem('companyid',id);
                                          });
    });
});  
