var supplier = localStorage.getItem('supplierid');
console.log(supplier);
var company = localStorage.getItem('companyid');
var session = localStorage.getItem('Sessionid');
var dbse = new sqlite3.Database('./DBManager/okbills.db');
var sql = 'SELECT * FROM suppliers WHERE sessionid = ? AND companyid = ? AND id = ?';
dbse.all(sql ,[session,company,supplier],function (err,rows){
    if(err){
        console.log(err)
    }
    else{
        rows.forEach(row => {
            console.log(row);
            $('.suppliername').append(`<h5>${row.supp_name}</h5>`)
            $('#supplier_view').append(` <tr>
            <td class="text-white">Name
             </td>
             <td class="w-1 text-right"><span class="text-muted">${row.supp_name}</span></td>
            </tr>
            <tr>
             <td class="text-white">Company
             </td>
             <td class="text-right"><span class="text-muted">${row.supp_company}</span></td>
            </tr>
            <tr>
             <td class="text-white">Number
             </td>
             <td class="text-right"><span class="text-muted">${row.supp_phone}</span></td>
            </tr>
            <tr>
             <td class="text-white">Email
             </td>
             <td class="text-right"><span class="text-muted">${row.supp_email}</span></td>
            </tr>
            <tr>
             <td class="text-white">Address
             </td>
             <td class="text-right"><span class="text-muted">${row.supp_add}</span></td>
            </tr>
            <tr>
             <td class="text-white">City
             </td>
             <td class="text-right"><span class="text-muted">${row.supp_city}</span></td>
            </tr>
             <td  class="text-white">Region
             </td>
             <td class="text-right"><span class="text-muted ">${row.supp_rel}</span></td>
            </tr>
            <tr>
             <td  class="text-white">Country
             </td>
             <td class="text-right"><span class="text-muted ">${row.supp_country}</span></td>
            </tr><!-- COL-END -->`);
        });
      
    }
})
