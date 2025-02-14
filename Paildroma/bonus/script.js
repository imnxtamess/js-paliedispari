// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Ask the user for an input word

const user_word = prompt("Insert a word here to find out if it's a palindrome: ")

// isPalindrome function

function isPalindrome(string) {
  const stringToArray = string.split(""); // Turns the user input into an array of its letters
  const reverseArray = stringToArray.reverse(); // reverses the letters of the array
  const arrayToString = reverseArray.join(""); // turns the reversed array into a string 
  if (arrayToString === string) {
    return isPalindrome = true
  }
  else {
    return isPalindrome = false
  }
}

// Call the isPalindrome function

if (isPalindrome(user_word)) {
  document.writeln("The word you chose is a palindrome")
}
else {
  document.writeln("The word you chose isn't a palindrome")
} 