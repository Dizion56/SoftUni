function rotateArr(arr, count){
    for (let i = 0; i < count; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}
rotateArr(['1',
'2',
'3',
'4'],
2)