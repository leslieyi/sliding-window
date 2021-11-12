//function which accepts an array of integers and a number called n. Function calculates the max sum of n, consecutive elements in array
//maxSubarraySum([],4)null
//maxSubarraySum([4,2,1,6,2],4) 13
//maxSubarraySum([100,200,300,400], 2)//700
//maxSubarraySum([4,2,1,6],1) 6

function maxSubarraySum(array, num) {
  if (array.length < num) return null; //edge case
  if (array.length === 1 && num === 1) return array[0]; //edge case

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i]; //summing the first three digits
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    //starting from the num'th array
    tempSum = tempSum - array[i - num] + array[i]; //subtracting the first number and adding the last num
    maxSum = Math.max(maxSum, tempSum); //which one is bigger? updates maxSum
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
console.log(maxSubarraySum([2], 1))

