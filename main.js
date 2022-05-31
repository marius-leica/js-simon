//- Visualizzare in pagina (html) 5 numeri casuali.
const htmlNumbers = document.getElementById("html-numbers");

function randomNumbers() {
  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    htmlNumbers.innerHTML += `<li>${randomNumber}</li>`;
  }
}

let fiveRandomNumbers = randomNumbers();
//- Avviare un timer di 30 secondi
//- Dopo 30 secondi, nascondere i numeri.
setTimeout(timer, 3000);

function timer() {
  htmlNumbers.classList.add("d-none");
}
insertNumber();

//- L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().

function insertNumber() {
  for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt("Inserisci un numero"));
    let userNumbers = [];
    userNumbers.push(userNumber);
    console.log(userNumbers[i]);
  }
  return userNumbers;
}
let userRandomNumbers = insertNumber();
// for (let i = 0; i < 5; i++) {
//   let userNumber = parseInt(prompt("Inserisci un numero"));
//   console.log(userNumber);
// }
