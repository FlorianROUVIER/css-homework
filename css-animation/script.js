const menuButtonElement = document.querySelector('.jsButton')
const menuElement = document.querySelector('.jsMenu')

menuButtonElement.addEventListener(
    'click',
    ()=>
    {
     menuElement.classList.toggle('is-active')    
    }

)