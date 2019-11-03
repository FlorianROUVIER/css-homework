// Toggle Settings menu

const menuButtonElement = document.querySelector('.jsButton')
const menuElement = document.querySelector('.jsMenu')

menuButtonElement.addEventListener(
    'click',
    ()=>
    {
     menuElement.classList.toggle('is-active')    
    }

)

// Change speed on menu 

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

// Change hexa colors on menu



const okButton = document.querySelector('.jsOkButton')

okButton.addEventListener(
    'click',
    ()=> 
    {
       const newHexa = document.querySelector('#hexadecimal').value 
       const hexaToChange = document.querySelector('.propeller-1')
       const hexaToChange2 = document.querySelector('.propeller-2')
       const hexaToChange3 = document.querySelector('.propeller-3')
       const hexaToChange4 = document.querySelector('.propeller-4')
       hexaToChange.style.background = `linear-gradient(2deg, ${newHexa}, #bbb, ${newHexa})`
       hexaToChange2.style.background = `linear-gradient(2deg, ${newHexa}, #bbb, ${newHexa})`
       hexaToChange3.style.background = `linear-gradient(2deg, ${newHexa}, #bbb, ${newHexa})`
       hexaToChange4.style.background = `linear-gradient(2deg, ${newHexa}, #bbb, ${newHexa})`

    }

)

