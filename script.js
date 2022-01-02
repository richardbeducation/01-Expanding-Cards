// the panels are two types only: active and not active. 
// At first, the first panel is active, then the active class switches as the use clicks

// So you need to bring all the panels into our JS file by creating a variable called panels

// to select you can use the usual various selectors, but here ww will use querySelectorAll, for all of the items in the NodeList 'panel' - in our case 5 divs

const panels = document.querySelectorAll('.panel')

// we want to loop through this NodeList (remember it looks like an array but isn't) and forEach usually takes in an arrow function 

// here the function contains an event listener which listens for a click; the fuction then runs a separate function below called removeActiveClasses which removes active from all panels

// finally panels.forEach adds an active class to the panel you just clicked

panels.forEach(panel => {
  panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
      panel.classList.remove('active')
  })
}
