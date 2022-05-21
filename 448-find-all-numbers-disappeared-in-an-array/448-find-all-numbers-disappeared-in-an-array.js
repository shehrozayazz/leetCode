/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(arr) {
  
let i = 1;
while (i <= arr.length) {
  if (i !== arr[i - 1]) {
    const t = arr[i - 1];
    const c = arr[i - 1] - 1;
    arr[i - 1] = arr[c];
    arr[c] = t;
    if (arr[i - 1] === t) {
      i++;
    }
  } else {
    i++;
  }
}

const missingNumbers = [];
for (let q = 0; q < arr.length; q++) {
  if (q + 1 !== arr[q]) {
    missingNumbers.push(q + 1);
  }
}
return missingNumbers;

};