/* 
findASeat: A movie seat selector.
By Miguel Rivas Perez
https://github.com/mrivasperez
I built this to help me keep learning and master JS.
If these comments annoy you: I'm sorry. They're here to help
me & others learn. <3
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

populateUI();

// get price of movie via value of option
let ticketPrice = +movieSelect.value;

// FUN FUNCTIONS!!!----------------------------------------------

// save selected movie index and price to local storage
function setMovieData(movieIndex, moviePrice) {

    // save index
    localStorage.setItem('selectedMovieIndex', movieIndex);

    // save price
    localStorage.setItem('selectedMoviePrice', moviePrice)
};

// update total and count
function updateSelectedCount() {

    // get selected seats (adds to a node list)
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // copy selectedSeats into arr using spread and map it to return array
    // then return the index of seats selected
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    // save seatsIndex in local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // get length of node list
    const selectedSeatsCount = selectedSeats.length;

    // get count, total and set innertexts
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};

// get data from local storage and populate UI
function populateUI() {

    // set selectedSeats to selectedSeats in local storage
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    // if there's something there then get it
    if(selectedSeats !== null && selectedSeats.length > 0) {
        // loop through seats
        seats.forEach((seat, index) => {
            
            // check if indexOf is greater than -1 to make sure there's something there
            if (selectedSeats.indexOf(index) > -1) {
                // add selected class to seat
                seat.classList.add('selected');
            }
        });
    }
    // set select movie to whatever is kept in local storage
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    // make sure it's not null
    if (selectedMovieIndex !== null) {
        // get 
        movieSelect.selectedIndex = selectedMovieIndex;
    }
};
// EVENT LISTENERS!!!-------------------------------------------
// movie select event
movieSelect.addEventListener('change', (e) => {
    // get ticket price (value) of selected
    ticketPrice = +e.target.value;
    updateSelectedCount();
    // save selected movie to local storage
    setMovieData(e.target.selectedIndex, e.target.value)
});
// seat click event
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
// initial count and total set
updateSelectedCount();