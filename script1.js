// ESERCIZIO 1
class person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson){
        if(this.age > otherPerson.age){
            console.log(`${this.name} is older than ${otherPerson.name}`)
        }else if(this.age < otherPerson.age){
            console.log(`${otherPerson.name} is older than ${this.name}`)
        }else{
            console.log('they are the same age!')
        }
    }

}

let persons = [
    new person('jack', 34),
    new person('simona', 56),
    new person('janette', 29),
    new person('luca', 67),
    new person('andrea', 37),
    new person('nicolò', 57),
    new person('davide', 52),
    new person('andrea', 18),
    new person('claire', 30),
    new person('roberto', 26)
]

persons.forEach(element => {
    let personDiv = document.createElement('div')
    document.getElementById('container').appendChild(personDiv)
    personDiv.innerText = `${element.name} is ${element.age}`
});

let btn = document.getElementById('compare_btn')
btn.onclick = () => {
    // Avendo optato per un lista hardcoded, randomizzo la selezione dell'elemento p1 (object) e quindi dell'elemento p2 da confrontare(metodo compareAge)
    let i = Math.floor(Math.random() * 10)
    let j = Math.floor(Math.random() * 10)
    let p1 = persons[i]
    let p2 = persons[j]


    p1.compareAge(p2)
    // il console.log è incluso nel metodo
}




