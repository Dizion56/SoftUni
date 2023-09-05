function sortNums(arr){
    let result = [];
    const sorted = arr.sort((a,b) => a-b);
    while(sorted.length !== 0){
        const big = sorted.shift();
        const small = sorted.pop();
        result.push(big,small);
    }
    return result;
}
console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));