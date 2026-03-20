const findTheOldest = function (peoples) {
  const thisYear = new Date().getFullYear();

  return peoples.reduce((people, current) => {
    if (!current.yearOfDeath) {
      current.yearOfDeath = thisYear;
    }

    if (!people.yearOfDeath) {
      people.yearOfDeath = thisYear;
    }

    const currentAge = current.yearOfDeath - current.yearOfBirth;
    const peopleAge = people.yearOfDeath - people.yearOfBirth;

    return currentAge > peopleAge ? current : people;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
