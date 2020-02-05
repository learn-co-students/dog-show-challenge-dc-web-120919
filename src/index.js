document.addEventListener('DOMContentLoaded', () => {
fectchDogs()
})

function fectchDogs(){ 
    fetch('http://localhost:3000/dogs') 
    .then( r => r.json())
    .then(dogs =>buildDogs(dogs))
}

function buildDogs(dogs) { 
    
    dogs.forEach(dog => { 
        let table = document.getElementById('table-body')
        let row = document.createElement('tr')
        let name = document.createElement('td')
        let breed = document.createElement('td')
        let sex = document.createElement('td')
        let edit = document.createElement('button')
        edit.innerText = "Edit DOG"
        sex.innerText = dog.sex
        breed.innerText = dog.breed
        row.append(name, breed, sex, edit)
        name.innerText = dog.name 
        table.appendChild(row)

    })

    
}