document.addEventListener('DOMContentLoaded',() => {

    const form = document.querySelector('form')
    const input = form.querySelector('input')
    const ul = document.getElementById('invitedList')
    
    const div = document.createElement('div')
    const main = document.querySelector('.main')
    
    const filterLabel = document.createElement('label')
    const filterCheckbox = document.createElement('input')
    
    main.insertBefore(div, ul)
    filterCheckbox.type = "checkbox"
    filterLabel.textContent = "Hide all users who have not confirmed"
    filterLabel.appendChild(filterCheckbox)
    div.appendChild(filterLabel)
    
    
    filterCheckbox.addEventListener('change',(e)=> {
        const isChecked = e.target.checked
        const lis = ul.children
    
        if(isChecked){
            for(let i = 0; i < lis.length; i++){
                let li = lis[i]
                if(li.className === "responded"){
                    li.style.display = ""
                }else{
                    li.style.display = "none"
                }
            }
        }else{
            for(let i = 0; i < lis.length; i++){
                let li = lis[i]
                li.style.display = ""
            }
        }
    })
    
    
    form.addEventListener('submit', (e)=> {
        e.preventDefault()
        
        const text = input.value
        input.value = ""
    
    
        const li = createLI(text)
        ul.appendChild(li)
    })
    
    function createLI(text){

        function createElement(elementName, property, value){
            const element = document.createElement(elementName)
            element[property] = value
            return element
        }

        function appendToLi(elementName, property, value){
            const element = createElement(elementName, property, value)
            li.appendChild(element)
            return element
        }

        const li = document.createElement('li')

        appendToLi('span', 'textContent', text)        
        appendToLi('label', 'textContent', "Confirmed").appendChild(createElement('input', 'type', 'checkbox'))
        appendToLi('button', 'textContent','remove')
        appendToLi('button', "textContent", "edit")
    
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
            const button = e.target
            const li = e.target.parentNode
            const ul = li.parentNode
            const action = button.textContent

            const nameActions = {
                remove: () => {
                    ul.removeChild(li)
                },
                edit: () =>{
                    const span = li.firstElementChild
                    const input = document.createElement('input')
                    input.type = "text"
                    input.value = span.textContent
                    li.insertBefore(input, span)
                    li.removeChild(span)
                    button.textContent = "save"
                },
                save: () => {
                    const input = li.firstElementChild
                    const span = document.createElement('span')
                    span.textContent = input.value
                    li.insertBefore(span, input)
                    li.removeChild(input)
                    button.textContent = "edit"
                }
            }

            nameActions[action]();
            
       }
    });
})