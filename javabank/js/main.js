$(document).ready(function() {

    function successCallback(response) {
        populateTable(response);
    }
    
    function errorCallback(request, status, error) {
        // do something with the error
    }
    
    // perform an ajax http get request
    $.ajax({
        url: 'http://localhost:8080/javabank/api/customer/',
        async: true,
        success: successCallback,
        error: errorCallback
    });

});

function populateTable(response) {

    var element = '';

    for (var i = 0; i < response.length; i++) {
        
        element += '<tr>';

        for (var j = 0; j < response.length; j++){
            element += '<td>' + Object.values(response) + '</td>';
        }

        element += '<td><button type="button" onclick="helloWorldFn()" class="btn btn-primary">Edit</button></td>';
        element += '<td><button type="button" class="btn btn-danger">Delete</button></td>';
        element += '</tr>';
    
    }

    $(element).appendTo('#users-table');

}