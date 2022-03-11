var srno
db8.all('SELECT * FROM items WHERE companyid = ? AND sessionid = ?',[companyid,sessionid],function(err, rows ) {
    var srno = 0;
rows.forEach(function(row,srno) {
    console.log(row)
     srno = srno + 1;
    console.log(srno);
     var table = $('.manage_item').DataTable();
     table.row.add([
      srno,
      row.itemname,
      row.openingstk + ' '+row.atprice,
      row.itemcode,
      row.productcatogery ,
      '$ ' +row.saleprice,
      `<a href="#" class="btn btn-sm btn-info tpButton" data-target="#modaldemo21" data-toggle="modal" href="">
      <i class="las la-pen"></i>
      </a> <a href="#" class="btn btn-sm btn-danger tpButton" id="idbtn" data-target="#modaldemo50" data-toggle="modal" href="" >
     <i class="las la-trash"></i>
     </a>`
      ]).draw().node().id = row.id;
      $('table').on('click','.tpButton', function() {
       id = jQuery(this).closest('tr').attr('id');
      // console.log(id);
    });
    });
}); 
