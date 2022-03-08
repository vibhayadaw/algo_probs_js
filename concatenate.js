function concatenate(a, b){
    console.log(a.push(...b));
    console.log(a);
}
function swapk(a,k){
    let tmp= [];
    console.log(a);
    for(let i=0; i<a.length; i++){
        if(i<k){
            tmp.push(a[i]);
        }
        a[i]=a[i+k];
        // console.log(a);
    }
    // console.log(tmp);
    for(let i=a.length-k, j=0;i< a.length;i++,j++){
        a[i]=tmp[j];
    }
    console.log(a);
}
function swapSpliceK(a, k){
    const b = a.splice(0,k);
    // console.log(a);
    // console.log(b);
    a.push(...b);
    console.log(a);
}
concatenate([1,2,3],['a','b','c'])
swapk([1,2,3,4,5,6],2)
swapSpliceK([1,2,3,4,5,6],2)
