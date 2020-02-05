document.addEventListener('DOMContentLoaded', () => {
fetchDogs()
})

function fetchDogs(){ 
    
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
        edit.addEventListener('click', editDog)
        edit.innerText = "Edit DOG"
        edit.dataset.id = dog.id
        sex.innerText = dog.sex
        breed.innerText = dog.breed
        row.append(name, breed, sex, edit)
        name.innerText = dog.name 
        table.appendChild(row)
    })
 }


 function editDog(e){ 
     
     let form = document.getElementById('dog-form')
     let name = e.target.parentElement.children[0].innerText
     form.children[0].value = name 
     let breed = e.target.parentElement.children[1].innerText
     form.children[1].value = breed 
     let sex  = e.target.parentElement.children[2].innerText
     form.children[2].value = sex
     
     form.dataset.id = e.target.dataset.id
     form.addEventListener('submit',patchDOG)
 }

 function patchDOG (e){ 
    e.preventDefault()
     let dogID = e.target.dataset.id
     let dogName = e.target.children[0].value 
     let dogBreed = e.target.children[1].value 
     let dogSex = e.target.children[2].value 

     let dog = {name: dogName, breed: dogBreed, sex: dogSex}
     

     fetch('http://localhost:3000/dogs/'+dogID, { 
         method: "PATCH", 
         headers: {
             "Content-Type" : "application/json"
         },
         body: JSON.stringify(dog)
     })
     .then(r => r.json() )
     .then(dog => updateDog(dog) ) 
}

function updateDog(dog){ 

    tr = document.getElementsByTagName('tr')[`${dog.id}`]
    tr.children[0].innerText = dog.name 
    tr.children[1].innerText = dog.breed
    tr.children[2].innerText = dog.sex
    
}