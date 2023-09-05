function increasingSubset(arr){
    let test = Number.MIN_SAFE_INTEGER;
    const result = [];
    arr.forEach(el => {
        if(el >= test){
            result.push(el);
            test = el;
        }
    });
    return result;
}
console.log(increasingSubset([20,
    3,
    2,
    15,
    6,
    1]));