const people = [
    {
      id: 1,
      first_name: "Modesty",
      last_name: "Glaze",
      gender: "Male",
    },
    {
      id: 2,
      first_name: "Margarete",
      last_name: "Ladley",
      gender: "Male",
    },
    {
      id: 3,
      first_name: "Jillie",
      last_name: "Swinfen",
      gender: "Male",
    },
    {
      id: 4,
      first_name: "Aubrette",
      last_name: "Ellison",
      gender: "Female",
    },
    {
      id: 5,
      first_name: "Steffi",
      last_name: "Grzeskowski",
      gender: "Female",
    },
    {
      id: 6,
      first_name: "Adore",
      last_name: "Wales",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Valentino",
      last_name: "O'Lagen",
      gender: "Female",
    },
    {
      id: 8,
      first_name: "Arlee",
      last_name: "Paulou",
      gender: "Female",
    },
    {
      id: 9,
      first_name: "Flint",
      last_name: "McDade",
      gender: "Female",
    },
    {
      id: 10,
      first_name: "Guillermo",
      last_name: "Clotworthy",
      gender: "Male",
    },
  ];

const female = people.filter((person) => person.gender==="Female");
console.log(female);

const fem_name = female.map((person) => person.first_name);
console.log(fem_name);

const person = people.find((person) => person.id === 6);
const femalePlus6 = [...female, person];
console.log(femalePlus6);

const SixPlusFemales = [person];
SixPlusFemales.push(female);
// const SixPlusFemales = [person, ...female];
console.log(SixPlusFemales);

const newPeople = [person, ...female];
const result = newPeople.map((person) => {
  const newObject = {
    ...person,
    email: `${person.first_name}@${person.last_name}.com`,
  };
  return newObject;
});
console.log(result);

const myFunction = (people) => {
    const female = people.filter((person) => person.gender === "Female");
    const person = people.find((per) => per.id === 6);
    const newPeople = [person, ...female];
    const result = newPeople.map((per) => {
     const newObject = {
     ...per,
     email: `${per.first_name}@${per.last_name}.com`,
       };
       return newObject;
     });
    return result;
    }