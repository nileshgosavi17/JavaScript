var person = {name:"abc",age:21};
var p1 = person;
p1.name ="Nilesh"
console.log(person);


//assign() is used for cloning objects
var p2 = Object.assign({},person); 
console.log(p2);
p2.name = "abc";
console.log(p1,person,p2);