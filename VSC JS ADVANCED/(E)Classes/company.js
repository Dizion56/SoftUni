class Company {
  departments = {};

  addEmployee(name, salary, position, department) {
    if (
      name === "" ||
      salary === "" ||
      position === "" ||
      department === "" ||
      salary <= 0
    ) {
      throw new Error("Invalid Input");
    }

    if (this.departments[department] === undefined) {
      departments[department] = name, position, salary;
    }
  }
}
