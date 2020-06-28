/** 
 * Given an unsorted array find the missing number
 */

 findMissingNumber = arr => {
   let a  = new Set(arr);
   let sum = 0;
   const b = Array.from(a);
   console.log(b);
   a.forEach((val) => sum = sum +val);
  //  console.log(sum);
   let oldSum = arr.reduce(function(a, b){
    return a + b;
    }, 0)
    let actSum = (arr.length *(arr.length +1))/2
    // console.log
    console.log(actSum - sum);
   return oldSum - sum;
 }

 findMissingNumber([1,2,3,4,5,6,6,8,9])