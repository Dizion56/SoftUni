function constructionCrew(obj) {
  if (obj.dizziness === true) {
    const waterToAdd = 0.1 * obj.weight * obj.experience;
    obj.levelOfHydrated += waterToAdd;
    obj.dizziness = false;
  }

  return obj;
}
console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
