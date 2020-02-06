document.addEventListener('DOMContentLoaded', () => {
fetchDogs()
})


function fetchDogs() {
  // On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.
  fetch('http://localhost:3000/dogs')
  .then(res => res.json())
  .then(dogsArray => {
    dogsArray.forEach(dog => buildDogTable(dog))
  })
}

function tableBody() {
  return document.getElementById('table-body')
}
 function buildDogTable(dog) {
   // - The dog should be put on the table as a table row. The HTML might look something like this `<tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>`
   let tableRow = document.createElement('tr')
   let dogName = document.createElement('td')
   dogName.className = 'dog'
   dogName.innerText = dog.name
   let dogBreed = document.createElement('td')
   dogBreed.className = 'breed'
   dogBreed.innerText = dog.breed
   let dogSex = document.createElement('td')
   dogSex.className = 'sex'
   dogSex.innerText = dog.sex
   let editBtn = document.createElement('button')
   editBtn.id = dog.id
   editBtn.addEventListener('click', editDog)
   editBtn.innerText = 'Edit Dog'


   tableRow.append(dogName, dogBreed, dogSex, editBtn)
   tableBody().appendChild(tableRow)
 }

 function editDog(e) {
   // - Make a dog editable. Clicking on the edit button next
   // to a dog should populate the top form with that dog's current information.
   let dogForm = document.getElementById("dog-form")
    dogForm.
   debugger
   let parentEl = e.target.parentElement
   let dogName = parentEl.children[0].innerText

 }





// - On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).
// - Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.
