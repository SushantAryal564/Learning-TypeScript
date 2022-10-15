const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuples
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sports", "Reading"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
