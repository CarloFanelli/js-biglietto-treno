/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

/* strumenti
    -prompt km 
    -prompt età
    -let (calcolo km)
    -if/else sconto
    -console.log
    -getElementById
*/

// chiedere i km

const kmPercorso = Number(prompt('quanti km devi percorrere?'));

// chiedere l'età

const etaUtente = Number(prompt('quanti anni hai?'));

// calcolare il prezzo del biglietto
const prezzoAlKm = 0.21;
let prezzoSenzaSconti = prezzoAlKm * kmPercorso;

console.log(prezzoSenzaSconti);

// verificare eventuali sconti
let prezzoScontato;

if ( etaUtente < 18 ){
    prezzoScontato = prezzoSenzaSconti * 0.8;
    console.log(prezzoScontato.toFixed(2));

} else if ( etaUtente >= 65 ){
    prezzoScontato = prezzoSenzaSconti * 0.6;
    console.log(prezzoScontato.toFixed(2));

} else{
    console.log(prezzoSenzaSconti.toFixed(2));

}

// stampare il prezzo del biglietto