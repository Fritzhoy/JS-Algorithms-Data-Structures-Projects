/**
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

- rot13("SERR PBQR PNZC")should decode to the string FREE CODE CAMP
- Passed:rot13("SERR CVMMN!")should decode to the string FREE PIZZA!
- Passed:rot13("SERR YBIR?")should decode to the string FREE LOVE?
- Passed:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

**/	

function rot13(str) {
  str = str.trim().split("");
  let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];
  let newStr = []
 str = str.map(item => 
 { let index = letters.indexOf
   (item) + 13;
   if (item.match(/\s|[^A-Za-z]/)){
     newStr.push(item);
   } else if (index > 25 && item.match(/[A-Za-z]/)){
     index = index - 26;
     newStr.push(letters[index]);
   } else {
     newStr.push(letters[index]);
   }
 }
 )
    
  return newStr.join("");
}
rot13("SERR PBQR PNZC");
