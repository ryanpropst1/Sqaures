const arr = [
  {
    name: "john",
    age: 21
  },
  {
    name: "amy",
    age: 20
  },
  {
    name: "vera",
    age: 10
  },
  {
    name: "logan",
    age: 40
  },
  {
    name: "peter",
    age: 255
  },
  {
    name: "haley2",
    age: 30
  }
];

//['john', 'logan', 'peter', 'haley2']
const newArr = [];
arr.map(person => {
  if (person.age >= 21) {
    newArr.push(person.name);
  }
  console.log(newArr);
});
