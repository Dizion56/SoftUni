function carFactory(obj) {
  const car = {};
  const engine = {};
  const carriage = {};
  const wheels = new Array(4);
  car["model"] = obj.model;
  if (obj.power <= 90) {
    engine["power"] = 90;
    engine["volume"] = 1800;
  } else if (obj.power <= 120) {
    engine["power"] = 120;
    engine["volume"] = 2400;
  } else {
    engine["power"] = 200;
    engine["volume"] = 3500;
  }

  if (obj.carriage === "hatchback") {
    carriage["type"] = "hatchback";
    carriage["color"] = obj.color;
  } else {
    carriage["type"] = "coupe";
    carriage["color"] = obj.color;
  }
  car["engine"] = engine;
  car["carriage"] = carriage;
  let wheeltype = 0;
  if (obj.wheelsize % 2 === 0) {
    wheeltype = 2 * Math.round(obj.wheelsize / 2) - 1;
    console.log("test");
  } else {
    wheeltype = obj.wheelsize;
  }

  car["wheels"] = wheels.fill(wheeltype);
  return car;
}
console.table(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
