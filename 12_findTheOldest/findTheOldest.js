const findTheOldest = function(people) {
  let living = people.filter(person => (person.yearOfDeath == undefined))
  //if (living.length > 0) {
    let ages = people.map(person =>
      (person.yearOfDeath - person.yearOfBirth));
    let oldest = 0;
    for (i in ages) {
      if (ages[i] > oldest) {
        oldest = i;
      };
    }
    return people[oldest - 1];
  //}
};

// Do not edit below this line
module.exports = findTheOldest;
