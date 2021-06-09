const choseBestDistance = (t, k, ls) => {
    //let bestArr = null; 
    let checkSum, currentArrSum = 0, arr = [], bestSum = null;
    const checkDistance = (currentSum, arr, index) => {
        checkSum = currentSum + ls[index];
        if (checkSum > bestSum && checkSum <= t) {
            bestSum = checkSum;
            //bestArr = arr.concat([ls[index]]);
        }
    }
    for (let i = 0; i <= ls.length - k; i++) {
        if (k === 1) {
            checkDistance(currentArrSum, arr, i);
            continue;
        } 
        for (let j = 0; j <= ls.length - k - i; j++) {
            arr = [ls[i], ...ls.slice(i + j + 1, i + j + k - 1)];
            currentArrSum = arr.reduce((sum, elem) => sum + elem, 0);
            for (let n = i + j + k - 1; n < ls.length; n++) {
                checkDistance(currentArrSum, arr, n);
            }
            if (k === 2) break;
        } 
    } 
    return bestSum  //, {bestSum, bestArr} 
}
//choseBestDistance(174, 3, [51, 56, 58, 59, 61])
let c = choseBestDistance(174, 3, [51, 56, 58, 59, 61])
console.log(c)
//console.log(c.bestSum, c.bestArr)

