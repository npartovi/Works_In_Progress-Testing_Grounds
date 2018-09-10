// 1: Set the text of the <h1> element


const title = document.querySelector('h1')
title.innerHTML = "This a title"



// 2: Set the color of the <h1> to a different color
title.style.color = "Yellow"


// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const paragraph = document.querySelector('.desc')
paragraph.innerHTML = "MEOWWWWWWW"

// 4: Set the class of the <ul> to 'list'

const ul = document.querySelector('ul')
ul.classList.add('list')

// 5: Create a new list item and add it to the <ul>

const li = document.createElement('li')
ul.appendChild(li)


// 6: Change all <input> elements from text fields to checkboxes

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.setAttribute('type','checkbox')
})

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button')
button.textContent = "delete me"

const extra = document.querySelector('.extra')
extra.appendChild(button)


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

const container = document.querySelector('.container')

button.addEventListener('click', ()=> {
    container.removeChild(extra)    
})


