const combinations = (arr, k) => {
    let res = [],
    subArr
    for (let i = 0; i < arr.length; i++){
        if (k === 1) {
            res.push([arr[i]]);
        } else {
            subArr = combinations(arr.slice(i + 1, arr.length), k - 1);
            for (let j = 0; j < subArr.length; j++ ){
                subArr[j].unshift(arr[i]);
                res.push(subArr[j]);
            }    
        }
    }    
    return res;
}
const chooseBestDistance = (t, k, ls) => {
    let currentSum, bestSum = 0;
    combinations(ls, k).forEach(element => {
       currentSum = element.reduce((sum, elem) => sum + elem, 0);
       if (currentSum > bestSum && currentSum <= t) {
           bestSum =currentSum;
       }
    });
    if (bestSum) return bestSum
    return null;
}
console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); 
console.log(chooseBestDistance(163, 3, [50]));




 
