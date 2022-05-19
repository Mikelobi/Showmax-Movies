import './style.css';
import getMovies from './modules/get-movies.js';
import displayMovies from './modules/display-movies.js';
import movieModal from './modules/movie-modal.js';
import countMovies from './modules/movie-counter.js';
// @ts-ignore
import Logo from './assets/showlogoo.jpg';

window.addEventListener('load', async () => {
  const logoImgDiv = document.querySelector('.logo');
  const logoIcon = new Image();
  logoIcon.src = Logo;
  logoImgDiv.appendChild(logoIcon);

  const movies = await getMovies();
  const sampleMovies = movies.slice(12, 60);
  await displayMovies(sampleMovies);

  const movieList = document.querySelector('.movie-list');

  movieList.innerHTML = `<span> ${countMovies(sampleMovies)} <span>`;

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  const viewDetailsButtons = [...document.querySelectorAll('.ovelay-details-btn')];
  movieModal(commentButtons, sampleMovies);
  movieModal(viewDetailsButtons, sampleMovies);
});
