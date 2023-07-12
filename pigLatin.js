/** Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
---
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
**/

function translatePigLatin(str) {
  let vowel = /[aeiou]/gi;
  let consonant = /[?![aeiou][a-z]]+/gi;
  if (str[0].match(vowel)) {
    return str.concat("way");
  } else if (str.match(vowel) === null) {
    // Check if the string contains only consonants
   return str.concat("ay");
  }
  else {
    let vowelIndex = str.indexOf(str.match(vowel)[0])
    return str.substr(vowelIndex).concat(str.substr(0, vowelIndex)).concat("ay");
  }
}
translatePigLatin("consonant");

/**
Code Explanation

- Assign your appropriate regular expression to a variable.
- If the first character is a vowel, just add way to end of string and return it.
- If the first character is not a vowel:
	- Find number of consonants before first vowel with help of indexOf(), match() and regex.
	- Start Pig Latin string with first vowel till the end.
	- Add letters before first vowel to end of string.
	- substr() is used for string manipulation here.
	- Add ay to end of string and return it.
 **/
