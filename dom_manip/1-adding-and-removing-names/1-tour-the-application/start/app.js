const form = document.querySelector('form')
const input = form.querySelector('input')
const ul = document.getElementById('invitedList')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    const text = input.value
    input.value = ""


    const li = createLI(text)
    ul.appendChild(li)
})

function createLI(text){
    const li = document.createElement('li')
    li.innerHTML = text
    const label = document.createElement('label')
    label.textContent = "Confirmed"
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    label.appendChild(checkbox)
    li.appendChild(label)
    const button = document.createElement('button')
    button.textContent = "remove"
    li.appendChild(button)
    return li
}

// e will hold the event object

ul.addEventListener('change',(e) => {
    
    const checkbox = e.target
    const checked = checkbox.checked
    const listItem = checkbox.parentNode.parentNode

    if(checked){
        listItem.className = 'responded'
    }else{
        listItem.className = ""
    }
    
})

ul.addEventListener('click', (e) => {
    
   if(e.target.tagName === 'BUTTON'){
       const li = e.target.parentNode
       const ul = li.parentNode
       ul.removeChild(li)
   }
})



