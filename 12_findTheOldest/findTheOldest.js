const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = {};
    const date = new Date();

    console.log(people);

    for (personIndex in people) {
        console.log('iterate')
        person = people[personIndex];
        console.log(typeof(person));
        console.log('person', person);
        let age = 0;

        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = date.getFullYear() - person.yearOfBirth;
        }

        console.log('age, oldest age', age, oldestAge)
        console.log(age > oldestAge);
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
            console.log('oldest: ', oldestPerson);
        }
    };
    return oldestPerson;
    };


// Do not edit below this line
module.exports = findTheOldest;
