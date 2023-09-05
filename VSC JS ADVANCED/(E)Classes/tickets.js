function ticket(arr, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const result = [];
  arr.forEach((element) => {
    const [dest, pri, stat] = element.split("|");
    const newTicket = new Ticket(dest, Number(pri), stat);
    result.push(newTicket);
  });

  if (criteria === "destination") {
    result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  } else if (criteria === "price") {
    result.sort((a, b) => a[criteria] - b[criteria]);
  } else if (criteria === "status") {
    result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  }

  return result;
}

ticket(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
