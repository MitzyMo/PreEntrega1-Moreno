// contact.js

function validate() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    var error_message = document.getElementById("error_message");

    error_message.innerHTML = "";

    if (name == "") {
        error_message.innerHTML += "<p>Ingrese un nombre.</p>";
    }

    if (subject == "") {
        error_message.innerHTML += "<p>Ingrese un tema.</p>";
    }

    if (phone == "") {
        error_message.innerHTML += "<p>Ingrese 10 dígitos.</p>";
    }

    if (email == "") {
        error_message.innerHTML += "<p>Inrgese un correo electrónico.</p>";
    }

    if (message == "") {
        error_message.innerHTML += "<p>Ingrese un mensaje.</p>";
    }

    if (error_message.innerHTML !== "") {
        return false;
    } else {
        showAlert();
        return false; // You can change this to true if you want the form to submit
    }
}


function showAlert() {
    // You can customize the alert here
    Swal.fire({
        title: '!Gracias!',
        text: 'Hemos enviado su mensaje',
        icon: 'success',
        timer: 4000, // 5 seconds
        showConfirmButton: false, // Hide the "OK" button
        onClose: function () {
            // Redirect to the index page after the timer expires
            window.location.href = "../index.html";
        }
    });
}

