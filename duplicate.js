
// duplicate remove 

function noDuplicate(val){
    let rmDup = [];
    for(let i = 0; i < val.length; i++){
        if(rmDup.includes(val[i]) === false){
            rmDup.push(val[i]);
        }
    }
    return rmDup;
}
let arr = [4, 6, 4, 1, 3, 6, 1, 9, 8, 1, 7];
let noDuplicateResult = noDuplicate(arr);

console.log(noDuplicateResult);



