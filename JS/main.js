function temperatuur() {
    let temp = prompt('Hoe warm is het?');

    if (temp <= 10) {
        alert('Het is koud.')
    } else if (temp > 10 && temp <= 16) {
        document.body.innerHTML += 'Het is niet warm, je kan beter een jas aandoen.<br> '
    } else if (temp > 16 && temp <= 24) {
        console.log('Het is niet koud en niet warm.')
    } else if (temp > 24 && temp < 30) {
        document.body.innerHTML += 'Je hoeft geen jas aan.<br>'
    } else if (temp >= 30) {
        alert('Je kan beter insmeren')
    }
}

temperatuur();



function cijfers() {
    let randomNumber = prompt('Kies een getal tussen de 1 en de 10.');
    if (randomNumber <= 5.5) {
        document.body.innerHTML += 'Je hebt een onvoldoende gehaald.<br>';
    } else if (randomNumber >= 5.5 && randomNumber <= 10) {
        document.body.innerHTML += 'Je hebt een voldoende gehaald.<br>';
    } else {
        alert('Dit getal kan niet selecteer het opnieuw')
    }
}

cijfers()




function numbers() {
    let randomNumber = prompt('Kies een getal');

    let even = false;

    if (randomNumber % 2 == 0) {
        even = true;
    }

    if (even == true) {
        document.body.innerHTML += 'Dit getal is even.<br>';
    }

    else {
        document.body.innerHTML += 'Dit getal is oneven.<br>';
    }

}

numbers()