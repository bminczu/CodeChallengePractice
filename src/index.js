let addToy = false;
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
    
  });
  fetchToys()
})



function fetchToys(){
  fetch("http://localhost:3000/toys") ////fetching toy data
  .then(response => response.json())  /// turning toy data into JSON
  .then(toy => {
    toy.forEach(toy => showToy(toy)) /// then we take each toy and we will pass it
    ///into a showToy function which we will build out next
  })
}

//// showToy function should...make a card for each toy
function showToy(toyData){

let toyDiv = document.createElement("div")
toyDiv.setAttribute("class", "card")
toyDiv.setAttribute("id", toyData.id)

let toyName = document.createElement("h2")
toyName.innerText = toyData.name

let toyImg = document.createElement("img")
toyImg.src = toyData.image
toyImg.setAttribute("class", "toy-avatar")

let toyP = document.createElement("p")
toyP.innerText = toyData.likes

let likeButton = document.createElement("button")
likeButton.setAttribute("class", "like-btn")
}
/// containing all the required elements under a div with
/// a class of "card" and append it to the div with class 
// of toy-collection














const toyForm = document.querySelector(".add-toy-form")

const toyCollection = document.querySelector("#toy-collection")



//////////////// FETCH SECTION /////////////////
function fetchToys() {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(result => result.forEach(showToy))
}
//////////// 
function postToy(toyName, toyImage){
fetch("http://localhost:3000/toys", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    name: toyName, 
    image: toyImage, 
    likes: 0 
  })
  
} )
  .then(response => response.json())
  .then(showToy)

}

//////////////// RENDER EACH TOY ON PAGE //////////////
function showToy(toy) {
  let toyDiv = document.createElement("div")
toyDiv.setAttribute("class", "card")

let toyHeader = document.createElement("h2")
toyHeader.innerText = toy.name

let toyImg = document.createElement("img")
toyImg.src = toy.image
toyImg.setAttribute("class", "toy-avatar")

let toyP = document.createElement("p")
toyP.innerText= toy.likes 

let likeButton = document.createElement("button")
likeButton.innerText = "Like <3"
likeButton.setAttribute("class", "like-btn")

//////////// Like Button ////////////
likeButton.addEventListener("click", event => {
  event.preventDefault()
  
  const toyId = toy.id
  let toyLikes = toy.likes
  ++toyLikes

  const toyAPI = "http://localhost:3000/toys"
  fetch(`${toyAPI}/${toyId}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      likes: toyLikes
    })
    
  } )
 
  toyP.innerText = toyLikes
} )

toyDiv.append(toyHeader, toyImg, toyP, likeButton)
toyCollection.append(toyDiv)
}

/////////////////EVENT LISTENERS//////////

toyForm.addEventListener("submit", event => {
  event.preventDefault()
  let toyName = event.target.name.value
  let toyImage = event.target.image.value
  postToy(toyName, toyImage)

})