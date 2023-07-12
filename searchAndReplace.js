/** Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

**/

function myReplace(str, before, after) {
  const arrStr = str.split(" ");
  let wordIndex = arrStr.indexOf(before);
  const str1 = arrStr.slice(0, wordIndex);
  const str2 = arrStr.slice(wordIndex+1);
  if(before[0].match(/[A-Z]/)) {
    const aft1 = after[0].toUpperCase();
    const aft2 = aft1 + after.slice(1);
    return str1.concat(aft2).concat(str2).join(" ");
  } else {
    return str1.concat(after.toLowerCase()).concat(str2).join(" ");
  }
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
