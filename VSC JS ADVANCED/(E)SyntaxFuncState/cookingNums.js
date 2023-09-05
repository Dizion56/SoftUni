function cookingNums(...params){
    let num = Number(params[0]);
    const cmdDict = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - x * 0.2
    }
    for (let i = 1; i < params.length; i++) {
        cmd = params[i];
        num = cmdDict[cmd](num);
        console.log(num);
    }
}

cookingNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');