/**********problem - 20 ************
 * find the smallest and biggest number
 * [1,2,3,4,5] // output : [1,5]
 */

const findMinMax = (nums) => {
  let minMaxArr = [nums[0], nums[1]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minMaxArr[0]) {
      minMaxArr[0] = nums[i];
    }
    if (nums[i] > minMaxArr[1]) {
      minMaxArr[1] = nums[i];
    }
  }
  return minMaxArr;
};

const findMinMaxWay2 = (nums) => {
  if (!Array.isArray(nums) || nums.length === 0) {
    return null; // handle empty array
  }

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return [min, max];
};
// const result20 = findMinMax([1, 2, 3, 4, 5]);
const result20 = findMinMax([5, 1, 3, 4]);
const result20Way2 = findMinMaxWay2([5, 1, 3, 4]);
// console.log(result20Way2);
// console.log(result20);
