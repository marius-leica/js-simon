//- Visualizzare in pagina (html) 5 numeri casuali.
const htmlNumbers = document.getElementById("html-numbers");

function randomNumbers() {
  let fiveRandomNumbers = [];

  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    htmlNumbers.innerHTML += `<li>${randomNumber}</li>`;
    fiveRandomNumbers.push(randomNumber);
  }
  return fiveRandomNumbers;
}
let fiveRandomNumbersArray = randomNumbers();
console.log(fiveRandomNumbersArray);

// - Avviare un timer di 30 secondi
// - Dopo 30 secondi, nascondere i numeri.
setTimeout(timer, 3000);

function timer() {
  htmlNumbers.classList.add("d-none");
}

//- L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().

setTimeout(promptUser, 3500);

function promptUser() {
  let userNumbers = [];
  let numeriIndovinati = [];

  for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt("Inserisci un numero"));
    userNumbers.push(userNumber);
    console.log(userNumbers);
  }
  for (let i = 0; i < userNumbers.length; i++) {
    for (let j = 0; j < fiveRandomNumbersArray.length; j++) {
      if (userNumbers[i] === fiveRandomNumbersArray[j]) {
        numeriIndovinati.push(userNumbers[i]);
        console.log(`Hai indovinato il numero ${userNumbers[i]}`);
      }
    }
  }
  console.log("Hai indovinato questi numeri:" + numeriIndovinati);
  return userNumbers;
}

//- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
