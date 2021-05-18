var person = {name:"Nilesh",age :21,city: {name:"Jalna"}}

var p1 = person;
p1.name  ="Gosavi";
console.log(person,p1);

var p2 =Object.assign({},person);
console.log(p2.city.name);


p2.city.name ="Mumbai";
console.log(p1.city.name)
console.log(p1,p2);



var p3 = JSON.stringify(person);
console.log(p3);
p3 = JSON.parse(p3);
console.log(p3);
p3.city.name = "Aurangabad "
console.log(p3,person)
