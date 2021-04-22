// Richiesta Nome Utente
var userName = prompt("Ciao, come ti chiami?");

// Richiesta Cognome
var surname = prompt("Quale è il tuo cognome?");

//Richiesta colore preferito
var favColor = prompt("Quale è il tuo colore preferito?")

// Richiesta età
var age = prompt("Quanti anni hai?")

// Creiamo la password
var password = userName + surname + favColor + age;

//Mostriamo la password appena generata
document.getElementById("password").innerHTML = password;