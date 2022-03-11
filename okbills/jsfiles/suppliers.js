var supp_name, supp_company, supp_phone, supp_email, supp_country, supp_state, supp_city, supp_add, supp_religion, supp_postbox, supp_taxid, supp_date ,supplierid
$('#Fields1').hide();
$('.coustmer-add-alert').hide();
var companyid = localStorage.getItem('companyid')
var sessionid = localStorage.getItem('Sessionid')
var dbse = new sqlite3.Database('./DBManager/okbills.db');

function addsuppliers() {
  console.log('hello');
  supp_name = $('#supp_name').val();
  supp_company = $('#supp_com').val();
  supp_phone = $('#supp_phn').val();
  supp_email = $('#supp_eml').val();
  supp_country = $('#supp_country').val();
  supp_state = $('#supp_state').val();
  supp_city = $('#supp_ct').val();
  supp_add = $('#supp_add').val();
  supp_religion = $('#supp_rel').val();
  supp_postbox = $('#supp_pb').val();
  supp_taxid = $('#supp_tax').val();
  supp_date = $('#supp_dt').val();
  supp_grp = $('#supp_grp').val();
  if (supp_name == "" || supp_phone == "" || supp_email == "" || supp_add == "") {
    $('#Fields1').show('slow').delay(1000).hide('slow');
  }
  else {
    var db = new sqlite3.Database('./DBManager/okbills.db', (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the in-memory SQlite database.');
    });
    db.run(`INSERT INTO suppliers(supp_name,supp_company,supp_phone,supp_email,supp_country,supp_state,supp_city,supp_add,supp_date,supp_rel,supp_taxid,supp_postbox,supplier_grp,companyid,sessionid) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [supp_name, supp_company, supp_phone, supp_email, supp_country, supp_state, supp_city, supp_add, supp_religion, supp_postbox, supp_taxid, supp_date, supp_grp, companyid, sessionid], function (err) {
      if (err) {
        return console.log(err.message);
      }
      else {
        console.log('row has added')
        $('.coustmer-add-alert').show('slow').delay(1000).hide('slow');
        setTimeout(() => {
          $('.section').load('../uicomponents/section_components/section-suppliers.html');
        }, 1000);
      }
    });
  }
}



dbse.all('SELECT * FROM suppliers_grp',function(err, rows ) {
  rows.forEach(function(row) {
    console.log(row)
  $('#supp_grp').append(` <option id="${row.id}" value="${row.supp_group}"> ${row.supp_group} </option>`)
     });
  }); 
/* $('.manage_supplier').DataTable().row.add([
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
  // console.log(id);
}); */