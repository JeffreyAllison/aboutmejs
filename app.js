// import functions

// grab DOM elements
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});
