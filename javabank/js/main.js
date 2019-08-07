window.onload = function () {

    var ajax;

    if (window.XMLHttpRequest) {
        // Mozilla, Safari, IE7+ ...
        ajax = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE 6 and older
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // run this when the ajax request completes
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            alert(ajax.responseText);
        }
    };

    // start the AJAX request
    ajax.open('GET', 'http:/localhost:8080/javabank/api/customer/', true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send();
}

/*
    var customerData = [
        { "id": 1, "firstName": "Rui", "lastName": "Ferrão", "email": "rui@gmail.com", "phone": "777888" },
        { "id": 2, "firstName": "Sergio", "lastName": "Gouveia", "email": "sergio@gmail.com", "phone": "777999" },
        { "id": 3, "firstName": "Bruno", "lastName": "Ferreira", "email": "bruno@gmail.com", "phone": "777666" },
        { "id": 4, "firstName": "Rodolfo", "lastName": "Matos", "email": "rodolfo@gmail.com", "phone": "777333" }
    ];

    var usersTable = document.getElementById('users-table');

    for (var i = 0; i < customerData.length; i++) {
        var row = usersTable.insertRow(-1);
        row.insertCell(0).innerHTML = customerData[i].firstName;
        row.insertCell(1).innerHTML = customerData[i].lastName;
        row.insertCell(2).innerHTML = customerData[i].email;
        row.insertCell(3).innerHTML = customerData[i].phone;
        row.insertCell(4).innerHTML = '<button type="button" onclick="helloWorldFn()" class="btn btn-primary">Edit</button>';
        row.insertCell(5).innerHTML = '<button type="button" class="btn btn-danger">Delete</button>';
    }

}

var helloWorldFn = function () {
    alert("hello world!");
};*/

