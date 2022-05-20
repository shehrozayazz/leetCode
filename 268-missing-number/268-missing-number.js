/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let temp = 0; let i=0;
while (i < arr.length) {
  if (i !== arr[i] && arr[i] < arr.length) {
    temp = arr[i];
    arr[i] = arr[i] + arr[temp];
    arr[temp] = arr[i] - arr[temp];
    arr[i] = arr[i] - arr[temp];
  } else {
    i++;
  }
}
    for(let k = 0;k<=arr.length;k++){
        if(k!==arr[k])
            return k;
    }
};