const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Remplace les valeurs par les chemins vers tes chansons
const playlist = [
    'static/media/1_souslevent.mp3',
    'static/media/2_sangpoursang.mp3',
    'static/media/3_mamanmae.mp3',
    'static/media/4_alwaysgaga.mp3',
    'static/media/5_lenvie.mp3'
];

let currentSongIndex = 0;

function playSong() {
    audioPlayer.src = playlist[currentSongIndex];
    audioPlayer.play();
}

function pauseSong() {
    audioPlayer.pause();
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong();
}

playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
stopBtn.addEventListener('click', stopSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Défilement des photos dans la galerie
const galleryCarousel = document.getElementById('galleryCarousel');
const carouselPrevBtn = galleryCarousel.querySelector('.carousel-control-prev');
const carouselNextBtn = galleryCarousel.querySelector('.carousel-control-next');
const photoContainers = document.querySelectorAll('.carousel-item');

function showPhoto(index) {
    // Masquer toutes les photos
    photoContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Afficher la photo spécifiée par l'index
    photoContainers[index].style.display = 'block';
    currentPhotoIndex = index;
}

let currentPhotoIndex = 0;

// Afficher la première photo au chargement de la page
showPhoto(currentPhotoIndex);

// Ajouter les écouteurs d'événements pour les flèches du carousel
carouselPrevBtn.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoContainers.length) % photoContainers.length;
    showPhoto(currentPhotoIndex);
});

carouselNextBtn.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoContainers.length;
    showPhoto(currentPhotoIndex);
});
