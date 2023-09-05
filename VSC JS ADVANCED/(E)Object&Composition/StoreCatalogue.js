function storeCatalogue(arr) {
  const sorted = arr.sort((a, b) => a.localeCompare(b));

  const dict = {};

  for (let i = 0; i < sorted.length; i++) {
    const element = sorted[i].split(" : ").join(": ");
    const firstElem = element[0];

    if (dict[firstElem] === undefined) {
      dict[firstElem] = [];
    }

    dict[firstElem].push(`  ${element}`);
  }

  let output = [];
  for (const key in dict) {
    const element = dict[key];
    output = [...output, key, ...element];
  }

  return output.join("\n");
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
