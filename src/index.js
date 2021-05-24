
const toyCollection = document.querySelector("#toy-collection")

document.addEventListener("DOMContentLoaded", () => {
fetchToys()

})

function fetchTeamMembers() {
    fetch("http://localhost:3000/toys") ////fetching toy data
    .then(response => response.json())  /// turning toy data into JSON
    .then(toy => {
      toy.forEach(toy => showToy(toy)) /// then we take each toy and we will pass it
      ///into a showToy function which we will build out next
    })
}

function showToy(toyData){

    let toyDiv = document.createElement("div")
    toyDiv.setAttribute("class", "card")
    
    let toyName = document.createElement("h1")
    toyName.innerText = toyData.name
    
    let toyImg = document.createElement("img")
    toyImg.src = toyData.image
    toyImg.setAttribute("class", "toy-avatar")
    
  
    
    toyDiv.append(toyName, toyImg)
    toyCollection.append(toyDiv)
}