function townsJSON(arr) {
  const tokens = arr
    .map((row) =>
      row
        .trim()
        .split("|")
        .map((cell) => cell.trim())
    )
    .map((row) => row.filter((cell) => cell !== ""));

  const header = tokens.shift();
  let output = [];

  for (const line of tokens) {
    const obj = {};
    const lat = Number(line[1]);
    const lon = Number(line[2]);
    obj[header[0]] = line[0];
    obj[header[1]] = Number(lat.toFixed(2));
    obj[header[2]] = Number(lon.toFixed(2));
    output.push(obj);
  }

  console.log(JSON.stringify(output));
}
townsJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
