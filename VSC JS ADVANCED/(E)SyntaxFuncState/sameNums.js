function sameNums(nums){
    const arr = nums.toString().split("").map(Number);
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(arr[i] !== arr[0]){
            isSame = false
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNums(2222222);
sameNums(1234);