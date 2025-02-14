// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.

// The user picks between even or uneven ⬇️

let user_choice = prompt("Pick between even and uneven: ex:(write 'even' or 'uneven'")

// The user picks a number between 1 or 5 ⬇️

let user_number = prompt("Choose a number between 1 and 5: ex:(write '1' '3' etc..")

// Generate a random number for the computer function() ⬇️

function generate_number_1to5() {
  const pc_random_number = Math.floor(Math.random() * 5) + 1;
  return pc_random_number
}

// Sum function ()

function sum(pc_number, input_number) {
  const sum = pc_number + input_number
  return sum
}






