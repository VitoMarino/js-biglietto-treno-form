// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.267113 € al km)
// va applicato uno sconto del 24.552% per gli under 21
// va applicato uno sconto del 37.893% per gli over 63.



let bottone = document.querySelector('button');

let prezzoAlKm = 0.267113;
let scontoUno = 24.552;
let scontoDue = 37.893;

bottone.addEventListener('click', function() {
    let kmDaPercorrere = document.querySelector('label:nth-child(1) > div');
    let age = document.querySelector('label:nth-child(2) > div');
    console.log(kmDaPercorrere.value, age.value);
})

