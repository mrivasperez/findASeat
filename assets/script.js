/* 
findASeat: A movie seat selector.
By Miguel Rivas Perez
https://github.com/mrivasperez
*/

// SELECTORS!!!---------------------------------------------------

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
let ticketPrice = +movieSelect.value;

// FUN FUNCTIONS!!!----------------------------------------------

// update total and count
function updateSelectedCount() {
    // get selected seats (adds to a node list)
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // get length of node list
    const selectedSeatsCount = selectedSeats.length;
    // get count and set innertext
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};


// EVENT LISTENERS!!!-------------------------------------------

// movie select event
movieSelect.addEventListener('change', (e) => {
    // get ticket price (value) of selected
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// seat click even
container.addEventListener('click', (e) => {
    /* check if user clicked on open seat by checking if target
    contains the class of seat and does NOT contains class of
    occupied */
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // toggle selected class to seat
        e.target.classList.toggle('selected');
        updateSelectedCount();
    };
});