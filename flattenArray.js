// Flattening an array. Ex: Input : [[1, 2, 3], 4, [5, [6, 7]] Output: [1, 2, 3, 4, 5, 6, 7].

const flatten = arr => {
  const len = arr.length;
  const final =[]
  for( let i =0; i< len; i++){
    if(Array.isArray(arr[i])){
      //then pass to flatten again
      final.push(...flatten(arr[i]))
    }
    else{
     final.push(arr[i])
    }
  }
  return final
}

console.log(flatten([[1, 2, 3], 4, [5, [6, 7]]]));