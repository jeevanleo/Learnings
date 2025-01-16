/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var normalise = (str) => str.split("").sort().join("");

  if (normalise(str1) === normalise(str2)) {
    console.log("it is anagram");
  } else {
    console.log("not an anagram");
  }
}
var str1 = "jeevan";
var str2 = "naveej";
isAnagram(str1, str2);
module.exports = isAnagram;
