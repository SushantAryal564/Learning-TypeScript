var person = {
  name: "Sushant",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
var favouriteActivities;
favouriteActivities = ["Sports", "Reading"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
  var hobby = _a[_i];
  console.log(hobby.toUpperCase());
}
