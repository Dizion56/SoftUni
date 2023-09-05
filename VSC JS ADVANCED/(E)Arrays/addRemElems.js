function addRemElem(commands) {
    let result = [];
    let num = 0;
    for (let i = 0; i < commands.length; i++) {
        num++;
        if(commands[i] === 'add'){
            result.push(num);
        }else{
            result.pop();
        }
    }
    console.log(result.length == 0 ? 'Empty': result.join('\n'));
}
addRemElem(['remove',
'remove',
'remove']
);
