// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Ask the user for an input word

const user_word = prompt("Insert a word here to find out if it's a palindrome: ")

// isPalindrome function

function isPalindrome(string) {

  let reversed_string = ""; // creates an empty string

  for (let i = string.length - 1; i >= 0; i--) // starting from the position of the last letter of the string (string.length -1) add each letter to the var "reversed_string"
    reversed_string += string[i]

  if (reversed_string === string)
    return true // returns the isPalindrome value to true if the reversed string is the same as the user_word
}

// Call the isPalindrome function

if (isPalindrome(user_word)) {
  document.writeln("The word you chose is a palindrome")
}
else {
  document.writeln("The word you chose isn't a palindrome")
} 