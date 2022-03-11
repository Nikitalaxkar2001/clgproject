let data = JSON.parse(localStorage.getItem('isIDavaliable'));
console.log(data[0].companyname);
$('.user-info').append(`<h4 class="font-weight-semibold mt-3 mb-0">${data[0].companyname}</h4>
                <span class="mb-0 text-muted">${data[0].username}</span>`)

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./DBManager/okbills.db');
db.all('SELECT * FROM session', function (err, rows) {
    rows.forEach(function (row) {
        console.log(row)
        $('#chooseopt').append(` <option id="${row.id}" value="${row.FinancialYear}"> ${row.FinancialYear} </option>`)
    });
});
$('#spinner-border2').hide();
function show_session() {
    $('#spinner-border2').show();
    let session = $('#chooseopt').val();
    console.log(session);
    let sql = 'SELECT id FROM session WHERE FinancialYear = ?';
    db.all(sql, [session], function (err, rows) {
        rows.forEach(function (row) {
            console.log(row)
            let financialYear = row.id
            localStorage.setItem('Sessionid', financialYear);
            let show = localStorage.getItem('Sessionid');
            let session = $('#chooseopt').val();
            localStorage.setItem('financialYear', session);
            setTimeout(function () { $(location).attr('href', '../uicomponents/dashboard.html'); }, 2000);
        })
    })
    notif({
        msg: "Session has changed sucessfully",
        type: "success"
    });
}
let show_year = localStorage.getItem('financialYear');
$('#showyear').html(`${show_year}`);


function logout() {
    let is_id = localStorage.getItem('isIDavaliable');
    console.log(is_id);
    localStorage.removeItem('isIDavaliable');
    $(location).attr('href', '../uicomponents/multicompany.html');
}
