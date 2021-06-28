var ourDog =
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

console.log(ourDog.name);

console.log(ourDog["legs"])

var dogLegs = "legs";
console.log(ourDog[dogLegs]);

ourDog.name = "Happy Camper";
console.log(ourDog.name);

ourDog['bark'] = "woof"; //add new property

delete ourDog.name; //delete properties

console.log(ourDog.hasOwnProperty('name'));
