/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (n,c=0) {
  if (n === 0) return c;
return (n % 2) ? numberOfSteps(--n, ++c) : numberOfSteps(parseInt(n / 2), ++c);
  
};