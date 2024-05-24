//#region global
let jsonData = {
    data: {
        name: 'A',
        age: 12
    }
};

let testName = 'Test By Victor'

//#endregion

$(document).ready(function () {
    initEventButton();
});

//#region init
function initEventButton() {
    $('#btnSave').on('click', function () {
        $('#testSpan').text('The BtnSave was clicked');
        callAjax(jsonData);
    })

    $('#btnDisplay').on('click', function () {
        $('#testSpan').text('The btnDisplay was clicked');
        alertPopup('Test Msg', 'Test header', null, null);
    })
}
//#endregion

//function callAjax(reqData) { 
//    $.ajax({
//        url: '/Home/TestCallAjax', // URL of your ASP.NET controller action
//        type: 'POST', // Use POST method
//        contentType: 'application/json', // Set content type to JSON
//        data: JSON.stringify(reqData), // Convert JSON object to string
//        success: function (response) {
//            // Handle success response
//            console.log('Data sent successfully');
//            console.log('Response:', response);
//        },
//        error: function (xhr, status, error) {
//            // Handle error response
//            console.error('Error sending data:', error);
//            console.log(status);
//            console.log(xhr);
//        }
//    });
//}

function callAjax(reqData) {

    /*----------------------------- It worked ---------------------------*/
    $.ajax({
        type: "GET",
        url: 'Home/GetNames',
        dataType: "json",
        success: function (result) {
            console.log(result);
        },
        error: function (req, status, error) {
            console.log(status);
        }
    });

    $.ajax({
        type: "POST",
        url: 'Home/PostName',
        dataType: "json",
        data: { name: "Victor" },
        success: function (result) {
            console.log(result);
        },
        error: function (req, status, error) {
            console.log(status);
        }
    });
    /*------------------------------------------------------- */

    $.ajax({
        type: "POST",
        url: 'Home/ProcessData',
        /*contentType: "application/json; charset=utf-8",*/
        data: jsonData,
        /*data: JSON.stringify({ testName: "Victor" }),*/
        dataType: "json",
        success: function (result) {
            console.log(result);
        },
        error: function (req, status, error) {
            console.log(status);
        }
    });
}
