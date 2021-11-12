//function that accepts two params, array of pos integers and positive int.
//return minimal length of contagious subarray of which the sum is greater than or equal to the integer passed to the function, if there isn't one, return 0

//minSubArrayLen([2,3,1,2,4,3],7) 2bc [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4],9) 2
function minSubArrayLen(array, target) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    // if current window doesn't add up to the given sum then // move the window to right

    if (total < target && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= target) {
      // if current window adds up to at least the sum given then
      // we can shrink the window
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
