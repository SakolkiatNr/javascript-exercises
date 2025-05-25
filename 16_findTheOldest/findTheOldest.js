// const findTheOldest = function(people) {
//     let oldestAge = 0;
//     let oldest = people[0];
        
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].yearOfDeath === undefined) {
//            let currentYear = new Date().getFullYear();
//             let age = currentYear - people[i].yearOfBirth;
//             if (age > oldestAge) {
//                 oldestAge = age;
//                 oldest = people[i]; 
//             }
//         }
//         let age = people[i].yearOfDeath - people[i].yearOfBirth;
//         if (age > oldestAge) {
//             oldestAge = age;
//             oldest = people[i]; 
//         } 
//     }
//     return oldest;
// };

function getAge(birth, death) {
    if (!death) {
        const year = new Date().getFullYear();
        return year - birth;
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth, 
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
}

const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

// Do not edit below this line
module.exports = findTheOldest;
