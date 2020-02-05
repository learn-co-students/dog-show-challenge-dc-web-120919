document.addEventListener('DOMContentLoaded', () =>{
console.log("connected") 
fetchAllDogs()

})

function fetchAllDogs(){
    fetch("http://localhost:3000/dogs")
    .then (r => r.json())
    .then(dogsArray => {
    dogsArray.forEach(dog => buildDogs(dog))
    })
}

function buildDogs(dog){
    let dogTable = document.getElementById('table-body')
    let tr = document.createElement('tr')
    let dogName = document.createElement('td')
    let dogBreed = document.createElement('td')
    let dogSex = document.createElement('td')
    let dogEdit = document.createElement('button')
    dogName.innerText = dog.name
    dogBreed.innerText = dog.breed
    dogSex.innerText = dog.sex
    dogEdit.innerText = "Edit dog"
    tr.append(dogName,dogBreed,dogSex,dogEdit)
    dogTable.appendChild(tr)

}