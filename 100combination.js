/**
 * 
 */

function createCombination() {
 let numbers = [1,2,3,4,5,6,7,8,9];
 let target = 100;
 let combinations = Math.pow(3,numbers.length-1);
 
 let solutions = [];
 // o stands for operands
 let o = { 0 : "", 1 : "-", 2 : "+" };
 
 for(let i = 0; i <= combinations; i++)
 {
     let tmp = i.toString(3);    // translates the index in base 3
     let p = ("00000000" + tmp).substr(-8,8).split("").map(function(v){ return parseInt(v) });
     let abc = "1"+o[p[0]]+"2"+o[p[1]]+"3"+o[p[2]]+"4"+o[p[3]]+"5"+o[p[4]]+"6"+o[p[5]]+"7"+o[p[6]]+"8"+o[p[7]]+"9";
 
     if (eval(abc) === 100)
     {
         solutions.push(nums);
     }
 }
}
createCombination();