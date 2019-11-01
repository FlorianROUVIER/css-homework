const menuButtonElement = document.querySelector('.jsButton')
const menuElement = document.querySelector('.jsMenu')

menuButtonElement.addEventListener(
    'click',
    ()=>
    {
     menuElement.classList.toggle('is-active')    
    }

)



const speedChange = document.querySelector('.speedCase-1')
const propellers = document.querySelector('.js-propellers')
const speedChange2 = document.querySelector('.speedCase-2')
const speedChange3 = document.querySelector('.speedCase-3')
const normalSpeed = document.querySelector ('.normalSpeed')

speedChange.addEventListener(
    'click',
    ()=>
    {
        propellers.style.animation = "animation 9s linear infinite"
    }
)

speedChange2.addEventListener(
    'click',
    ()=>
    {
        propellers.style.animation = "animation 2.5s linear infinite"
    }
)

speedChange3.addEventListener(
    'click',
    () =>
    {
        propellers.style.animation = "animation 0.99s linear infinite"
    }
)

normalSpeed.addEventListener(
    'click',
    () =>
    {
        propellers.style.animation = "animation 5s linear infinite"
    }
)
