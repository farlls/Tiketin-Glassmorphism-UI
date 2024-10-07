const movies = [
    { title: "Avatar (2009)", description: "Description of Movie 1", image: "Assets/Img/avatar.jpg", rating: "★★★★☆" },
    { title: "Avengers: Endgame (2019)", description: "Description of Movie 2", image: "Assets/Img/avengers-endgame.jpg", rating: "★★★☆☆" },
    { title: "Avatar: The Way of Water (2022)", description: "Description of Movie 3", image: "Assets/Img/avatar-the-way-of-water.webp", rating: "★★★★★" },
    { title: "Titanic (1997)", description: "Description of Movie 3", image: "Assets/Img/titanic.jpg", rating: "★★★★☆" },
    { title: "Star Wars: Episode VII - The Force Awakens (2015)", description: "Description of Movie 3", image: "Assets/Img/star-wars-the-force-awakens.jpg", rating: "★★★☆☆" },
    { title: "Avengers: Infinity War (2018)", description: "Description of Movie 3", image: "Assets/Img/avengers-infinity-war.jpg", rating: "★★★★☆" },
    { title: "Spider-Man: No Way Home (2021)", description: "Description of Movie 3", image: "Assets/Img/spiderman-no-way-home.jpg", rating: "★★★★★" },
    { title: "Inside Out 2 (2024)", description: "Description of Movie 3", image: "Assets/Img/inside-out-2.jpg", rating: "★★★★★" },
    { title: "Jurassic World (2015)", description: "Description of Movie 3", image: "Assets/Img/jurassic-world.jpg", rating: "★★☆☆☆" },
    { title: "The Lion King (2019)", description: "Description of Movie 3", image: "Assets/Img/the-lion-king.jpg", rating: "★★★★☆" },
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-8 col-sm-auto col-md-auto mb-4';
    card.innerHTML = `
        <div class="card card-glass h-100" style="width: 18rem;">
            <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}">
            <div class="card-body justify-content-center align-content-center">
              <h5 class="card-title">${movie.title}</h5>
              <p class="rating">${movie.rating}</p>
              <p class="card-text">${movie.description}</p>
              <button href="#" class="btn btn-glass" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
            </div>
          </div>
    `;
    movieList.appendChild(card);
    
});

function openBookingModal(movieTitle) {
    document.getElementById('movieTitle').value = movieTitle;
}

function bookTicket() {
    const movieName = document.getElementById('movieTitle').value;
    const name = document.getElementById('name').value;
    const seatsValue = document.getElementById('seats').value;

    const message = `Booking ${movieName} for ${seatsValue} seats by ${name}`;
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    modal.hide();

    alert(message);

    document.getElementById('name').value = '';
    document.getElementById('seats').value = '';
}