document.addEventListener('DOMContentLoaded', () => {
fetchDogs()
})


//fetch

function fetchDogs(){
    fetch("http:/localhost:3000/dogs")
    .then(response => response.json())
    .then(dogs => {
        dogs.forEach(dog =>
        renderDogsTable(dog))})
}

// rending page
function renderDogsTable(dog){
    // console.log(dog)
    // <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

    let tableRow = document.createElement("tr")
    tableRow.id = `dog-${dog.id}`
    let tableDataName = document.createElement("td")
    tableDataName.innerText = dog.name

    let tableDataBreed = document.createElement("td")
    tableDataBreed.innerText = dog.breed

    let tableDataSex = document.createElement("td")
    tableDataSex.innerText = dog.sex

    let tableDataEdit = document.createElement("td")
    let editButton = document.createElement("button")
    editButton.innerText = "Edit Dog Info"
    editButton.addEventListener("click", () => {editHandler(dog)})


    getTableBody().appendChild(tableRow)
    tableRow.append(tableDataName, tableDataBreed, tableDataSex, tableDataEdit)
    tableDataEdit.appendChild(editButton)
}

//get elements
//<tbody id="table-body">
function getTableBody(){
    return document.getElementById("table-body")
}

function getEditForm(){
    return document.getElementById("dog-form")
}

//handler
function editHandler(dog){
    // console.log(event)
    // when I click edit, I want the dog's info populated in the edit box
    
    getEditForm().elements.name.value = dog.name
    getEditForm().elements.breed.value = dog.breed
    getEditForm().elements.sex.value = dog.sex
    getEditForm().elements.dogId.value = dog.id
    
    getEditForm().addEventListener("submit", formSubmission)
}

function formSubmission(){
    event.preventDefault()
    // console.log(event)
    //when I click submit, i want the dog's updated info reflected on the table
    let updatedName = event.target.name.value
    let updatedBreed = event.target.breed.value
    let updatedSex = event.target.sex.value
    let selectedDogId = parseInt(event.target.dogId.value)

    let updatedInfo = {name: updatedName, breed: updatedBreed, sex: updatedSex}

    fetch("http://localhost:3000/dogs/" + selectedDogId, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updatedInfo)
    }).then(response => response.json())
    .then(dog => updateTable(dog))
}

function updateTable(dog){
    let updateTable = document.getElementById(`dog-${dog.id}`)
    updateTable.children[0].innerText = dog.name
    updateTable.children[1].innerText = dog.breed
    updateTable.children[2].innerText = dog.sex
}