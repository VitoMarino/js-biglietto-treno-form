// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.267113 € al km)
// va applicato uno sconto del 24.552% per gli under 21
// va applicato uno sconto del 37.893% per gli over 63.

let prezzoAlKm = 0.267113;
let scontoUno = 24.552;
let scontoDue = 37.893;
let bottone = document.querySelector('button');

bottone.addEventListener('click', function() {
    let kmDaPercorrere = document.querySelector('#inputuno');
    let age = document.querySelector('#inputdue');
    let prezzoPieno = kmDaPercorrere * prezzoAlKm;
    console.log(kmDaPercorrere.value, age.value);

    if (age<21) {
        let prezzoFinale = (prezzoPieno/100) * scontoUno;
        console.log(prezzoFinale.toFixed(2));
    } else if (age>63) {
        let prezzoFinale = (prezzoPieno/100) * scontoDue;
        console.log(prezzoFinale.toFixed(2));
    } else {
        console.log(prezzoPieno.toFixed(2));
    }

})

