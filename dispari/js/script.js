// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. Chiedo all'utente di inserire pari o dispari e un numero da 1 a 5
var pariDispariUtente = prompt("Inserisci o pari o dispari").toLowerCase();
while (pariDispariUtente != "pari" && pariDispariUtente != "dispari") {
  pariDispariUtente = prompt("Hai sbagliato!!! Inserisci o pari o dispari");
}

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (numeroUtente > 5 || numeroUtente < 1 || isNaN(numeroUtente)) {
  numeroUtente = parseInt(prompt("Hai sbagliato!!! Inserisci un numero da 1 a 5"));
}
// 2. genero un numero random tra 1 e 5 per la cpu
var numeroCpu = generaNumeroRandom(1, 5);
console.log(numeroCpu);
// 3. sommo il numero inserito dall'utente con quello generato dalla computer
var somma = numeroUtente + numeroCpu;
// 4. verifico se la somma è pari o dispari
var risultatoPariDispari = checkPariDispari(somma);
// 5. l'utente vince se la somma è pari e ha scelto pari oppure la somma è dispari e ha scelto dispari
//    altrimenti perde
if(risultatoPariDispari == pariDispariUtente) {
  console.log("Grande hai vinto!");
} else {
  console.log("Mi spiace hai perso!");
}

/*
  funzione che restituisce un numero random fra un range
*/
function generaNumeroRandom(min, max) {
  var numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
}
/*
  funzione che restituisce "pari" o "dispari" di un numero passato per argomento
*/
function checkPariDispari(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
