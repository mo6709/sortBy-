//defining the type
type Person = { name: string; age: number };

//the collection
const people: Person[] = [
  { name: "moshe", age: 34 },
  { name: "yossi", age: 12 },
  { name: "yakov", age: 11 },
];

//initializing the Map for optimization
const cache = new Map<number, boolean>();

//check the cache, if not exist insert new entry
const checkCondition = (age: number): boolean => {
  if (cache.has(age)) return cache.get(age)!;
  const result = (age + 100) % 10 === 0;
  cache.set(age, result);
  return result;
};

//an example of a callback (we can change the logic for wahtever needed)
//we can change the caching based on different logic
const sortBy = (a: Person, b: Person): number => {
  const checkA = checkCondition(a.age);
  const checkB = checkCondition(b.age);

  if (checkA && !checkB) return -1;
  if (!checkA && checkB) return 1;
  return a.age - b.age;
};

const sortedPeople = people.sort(sortBy);

console.log(sortedPeople);

//this is the best optimization I could think of.
//I am sure if I can do better, but I need t understand better what you try to achive first. 
