function isPalindrome(word){
  const backswardWord = word.toLowerCase().split("").reverse().join("") 
  if (backswardWord === word) {
    return true
  } 
  else {
    return false
  }
}
/* 
  Add your pseudocode here
  1.Create a variable that converts the word to lowercase, splits the word, reverses the letter and then joins the letters back together
  2.Create an if statement that if the backwards word and the original word are the same, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
