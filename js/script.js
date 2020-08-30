// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Chiedere all’utente di inserire una parola
var parola = prompt("Inserisci una parola");
// 2. Facciamo il reverse della parola inserita dall'utente
var parolaCapovolta = capovolgiParola(parola.toLowerCase());
// 3. Controllare se le due parole sono uguali
// 4. Stampare a video se la parola è palindroma oppure no
if(parola == parolaCapovolta) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}

/*
  Funzione che capovolge una stringa
*/
function capovolgiParola(stringa) {
  var stringaCapovolta = "";
  for (var i = stringa.length - 1; i >= 0; i--) {
    stringaCapovolta += stringa[i];
  }
  return stringaCapovolta;
}
