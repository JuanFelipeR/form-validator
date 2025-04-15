window.onload = function() {

    document.getElementById("send").addEventListener("click",formValidate);
    
}

function formValidate() {

    let cardNumber = document.getElementById("cardnumber");
    let invalidCard = document.getElementById("error-message-card");
    let cvc = document.getElementById("cvc");
    let invalidCvc = document.getElementById("error-message-cvc");
    let amount = document.getElementById("amount");
    let invalidAmount = document.getElementById("error-message-amount");
    let firstName = document.getElementById("firstName");
    let invalidFirstName = document.getElementById("error-message-fn");
    let lastName = document.getElementById("lastName");
    let invalidLastName = document.getElementById("error-message-ln");
    let city = document.getElementById("city");
    let invalidCity = document.getElementById("error-message-city");
    let state = document.getElementById("state");
    let invalidState = document.getElementById("error-message-state");
    let postalCode = document.getElementById("postalCode");
    let invalidPostalCode = document.getElementById("error-message-pc");
    let message = document.getElementById("message");
    let invalidMessage = document.getElementById("error-message");
    let alert = document.getElementById("alert");

    //Card number validation
    if (cardNumber.value.length !== 16 || cardNumber.value === "" || isNaN(cardNumber.value)) {

        cardNumber.style.boxShadow = '0 0 5px red';// Estilo sombra
        cardNumber.style.borderColor = "red";// color borde
        cardNumber.placeholder = "Número de tarjeta inválido";
        invalidCard.classList.add("error-message"); // agregar la clase de error
        invalidCard.textContent = "Ingrese un número de tarjeta válido"; // mensaje de error
        invalidCard.style.display = "block"; // mostrar el mensaje
        cardNumber.value = ""; // limpiar el campo de entrada
    } else {
        cardNumber.style.borderColor = "green";
        cardNumber.style.boxShadow = '0 0 5px green';
        invalidCard.style.display = "none";
    
    }
    
    //CVC validation
    if (cvc.value.length !== 3 || cvc.value === "" || isNaN(cvc.value)) {
        cvc.style.boxShadow = '0 0 5px red';
        cvc.style.borderColor = "red";
        cvc.placeholder = "CVC inválido";
        invalidCvc.classList.add("error-message"); // agregar la clase de error
        invalidCvc.textContent = "Ingrese un CVC válido"; // mensaje de error
        invalidCvc.style.display = "block"; // mostrar el mensaje
        
    } else {
        cvc.style.borderColor = "green";
        cvc.style.boxShadow = '0 0 5px green';
        invalidCvc.style.display = "none";
    }

    //Amount validation
    if (amount.value.length === 0 || amount.value === "" || isNaN(amount.value)) {
        amount.style.boxShadow = '0 0 5px red';
        amount.style.borderColor = "red";
        amount.placeholder = "Monto inválido";
        invalidAmount.classList.add("error-message"); // agregar la clase de error
        invalidAmount.textContent = "Ingrese un monto válido"; // mensaje de error
        invalidAmount.style.display = "block"; // mostrar el mensaje

    }
    else {
        amount.style.borderColor = "green";
        amount.style.boxShadow = '0 0 5px green';
        invalidAmount.style.display = "none";
    }

    //First name validation
    if (firstName.value.length === 0 || firstName.value === "" || !isNaN(firstName.value)) {
        firstName.style.boxShadow = '0 0 5px red';
        firstName.style.borderColor = "red";
        firstName.placeholder = "Nombre inválido";
        invalidFirstName.classList.add("error-message"); // agregar la clase de error
        invalidFirstName.textContent = "Ingrese un nombre válido"; // mensaje de error
        invalidFirstName.style.display = "block"; // mostrar el mensaje

    } else {
        firstName.style.borderColor = "green";
        firstName.style.boxShadow = '0 0 5px green';
        invalidFirstName.style.display = "none";
    }

    //Last name validation
    if (lastName.value.length === 0 || lastName.value === "" || !isNaN(lastName.value)) {
        lastName.style.boxShadow = '0 0 5px red';
        lastName.style.borderColor = "red";
        lastName.placeholder = "Apellido inválido";
        invalidLastName.classList.add("error-message"); // agregar la clase de error
        invalidLastName.textContent = "Ingrese un apellido válido"; // mensaje de error
        invalidLastName.style.display = "block"; // mostrar el mensaje

    }
    else {
        lastName.style.borderColor = "green";
        lastName.style.boxShadow = '0 0 5px green';
        invalidLastName.style.display = "none";
    }

    // City validation
    if (city.value.length === 0 || city.value === "" || !isNaN(city.value)) {
        city.style.boxShadow = '0 0 5px red';
        city.style.borderColor = "red";
        city.placeholder = "Ciudad inválida";
        invalidCity.classList.add("error-message"); // agregar la clase de error
        invalidCity.textContent = "Ingrese una ciudad válida"; // mensaje de error
        invalidCity.style.display = "block"; // mostrar el mensaje

    }
    else {
        city.style.borderColor = "green";
        city.style.boxShadow = '0 0 5px green';
        invalidCity.style.display = "none";
    }

    // State validation
    if (state.value.length === 0 || state.value === "" || !isNaN(state.value)) {
        state.style.boxShadow = '0 0 5px red';
        state.style.borderColor = "red";
        state.placeholder = "Estado inválido";
        invalidState.classList.add("error-message"); // agregar la clase de error
        invalidState.textContent = "Ingrese un estado válido"; // mensaje de error
        invalidState.style.display = "block"; // mostrar el mensaje

    }
    else {
        state.style.borderColor = "green";
        state.style.boxShadow = '0 0 5px green';
        invalidState.style.display = "none";
    }

    // Postal code validation
    if (postalCode.value.length === 0 || postalCode.value === "" || isNaN(postalCode.value)) {
        postalCode.style.boxShadow = '0 0 5px red';
        postalCode.style.borderColor = "red";
        postalCode.placeholder = "Código postal inválido";
        invalidPostalCode.classList.add("error-message"); // agregar la clase de error
        invalidPostalCode.textContent = "Ingrese un código postal válido"; // mensaje de error
        invalidPostalCode.style.display = "block"; // mostrar el mensaje

    }
    else {
        postalCode.style.borderColor = "green";
        postalCode.style.boxShadow = '0 0 5px green';
        invalidPostalCode.style.display = "none";
    }

    // Message validation
    if (message.value.length === 0 || message.value === "") {
        message.style.boxShadow = '0 0 5px red';
        message.style.borderColor = "red";
        message.placeholder = "Mensaje inválido";
        invalidMessage.classList.add("error-message"); // agregar la clase de error
        invalidMessage.textContent = "Ingrese un mensaje"; // mensaje de error
        invalidMessage.style.display = "block"; // mostrar el mensaje

    }
    else {
        message.style.borderColor = "green";
        message.style.boxShadow = '0 0 5px green';
        invalidMessage.style.display = "none";
    }

    // Alert message
    if (cardNumber.value.length === 16 && cvc.value.length === 3 && amount.value.length > 0 && firstName.value.length > 0 && lastName.value.length > 0 && city.value.length > 0 && state.value.length > 0 && postalCode.value.length > 0 && message.value.length > 0) {
        alert.classList.remove("alert-danger"); // quitar la clase de error
        alert.classList.add("alert-message","alert-success"); // agregar la clase de error
        alert.textContent = "Formulario enviado con éxito"; // mensaje de error
        alert.style.display = "block"; // mostrar el mensaje

    } else {
        alert.classList.remove("alert-message"); // agregar la clase de error
        alert.style.display = "block";
    }
}   
