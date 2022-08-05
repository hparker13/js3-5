const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');

class Person {
    constructor(){
        this.firstName = firstName.value;
        this.lastName = lastName.value;
        this.age = age.value;
    }
}

function addPerson() {
    const person1 = new Person;
    document.getElementById('message').innerHTML = 
    `Hello, ${person1.firstName} ${person1.lastName}!  You are ${person1.age} years old.`
}

document.getElementById('submit').addEventListener('click', addPerson)