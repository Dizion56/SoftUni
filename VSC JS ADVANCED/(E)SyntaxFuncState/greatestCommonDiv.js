function greatestCommonDiv(num1, num2){
    while(num2){
        const currNum = num2;
        num2 = num1 % num2;
        num1 = currNum;
    }
    console.log(num1);
}

greatestCommonDiv(15, 5);
greatestCommonDiv(2154, 458);