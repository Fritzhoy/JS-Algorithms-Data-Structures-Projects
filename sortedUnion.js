
/** Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
---
- uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])should return [1, 3, 2, 5, 4].
- Passed:uniteUnique([1, 2, 3], [5, 2, 1])should return [1, 2, 3, 5].
- Passed:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])should return [1, 2, 3, 5, 4, 6, 7, 8].
- Failed:uniteUnique([1, 3, 2], [5, 4], [5, 6])should return [1, 3, 2, 5, 4, 6].
- Failed:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])should return [1, 3, 2, 5, 4].
**/

function uniteUnique(arr) {
  const args = Array.prototype.slice.call(arguments); 
  const newArr = args.shift();;
  const uniteArr = newArr.concat(
    args.reduce((argsArr, arg) => {
      argsArr = argsArr.concat(arg);
      return argsArr;
      }).filter((item) => !newArr.includes(item)));
  let uniqueArr = [];
  uniteArr.forEach((item) => {
    if(!uniqueArr.includes(item))
    {
      uniqueArr.push(item)
    }});
    return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
