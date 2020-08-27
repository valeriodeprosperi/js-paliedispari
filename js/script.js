// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1.chiedo a utente di inserire la parola
var parola = prompt("inserisci una parola");
// 2. creo var per controllo parola
var check = checkPalindrom(parola);

// 3. scrivo se la parola è o non è un palindromo
if (check){
  alert("è un palindromo");
} else {
  alert("non è un palindromo");
}

// 4.provo creare funzione per check
function checkPalindrom(parola) {
  var check = true;
  for (var i = 0; i < parola.length; i++)
  // dubbi su come procedere
