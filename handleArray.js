function handleArray(arr) {
  return arr.map((item) => `${item.name}-${item.id}`);
}

module.exports = handleArray;

/*
const obj = { id: 1, name: "jina", age: 12 };
const obj2 =  { id: 'ghd', name: 'hello', city: 'nbo'}

// const idOfIndividual = obj.id;
// const ageOfIndividual = obj.age;
// const nameOfIndividual = obj.name;

const { id: idOfIndividual, name: nameOfIndividual, age } = obj; // object destructuring

const nums = [2024, 15, 'Jina'];
const year = nums[0];
const umri = nums[1];
const jina = nums[2];

const [mwaka, umri1, jina1] = nums; // array destructuring

const [name, setName] = useState();
const [title, setTitle] = useState();
const a = useState();
*/
