// SELECTORS
// div with class of container
const container = document.querySelector('.container');
// all seats that are not occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// count span
const count = document.getElementById('count');
// total span
const total = document.getElementById('total');
// movie drop down
const movieSelect = document.getElementById('movie');
// get price of movie via value of option
const ticketPrice = +movieSelect.value;

// EVENT LISTENERS
container.addEventListener('click', (e) => {
    /* check if user clicked on open seat by checking if target
    contains the class of seat and does NOT contains class of
    occupied */
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // add selected class to seat
        e.target.classList.toggle('selected');
    };

});