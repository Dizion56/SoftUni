function buyFruit(fruit, grams, price){
    const weight = grams / 1000; 
    const money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

buyFruit('orange', 2500, 1.80);
buyFruit('apple', 1563, 2.35);