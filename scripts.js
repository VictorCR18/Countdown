function startTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = parseInt(timer / 86400, 10);
        hours = parseInt((timer % 86400) / 3600, 10);
        minutes = parseInt(((timer % 86400) % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = days + " : " + hours + " : " + minutes + " : " + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let duration = 737068; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

const modalFuction = (event) => {

    let modal = document.getElementById("modal"); // Get the modal

    let button = document.getElementById("button"); // Get the button that opens the modal

    let submit = document.getElementById("bnt");

    let span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
    // When the user clicks the button, open the modal 
    button.onclick = function () {
        modal.style.display = "flex";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }

    let name = document.getElementById('name')
    let email = document.getElementById('email');
    let contate = document.getElementById('contate');

    contate.textConten = " ";

    if (name.value && email.value != "") {
        submit.onclick = function () {
            alert("Enviado com sucesso!");
        }
    }

    console.log(name.value)
    console.log(email.value)
    console.log(contate.value)
}

window.onclick = function (event) {
    modalFuction(event);
}