// Dark Mode / Light Mode
;(function (window, document, undefined) {

  'use strict';

  // Feature test
  if (!('localStorage' in window)) return;

  // Get the navigation menu
  var nav = document.querySelector('.nav-items');
  var root = document.querySelector('nav');
  if (!nav) return;

  // Insert the night mode toggle
  root.innerHTML += '<button id="dark-mode" class="icon-link" alt="Dark Mode" aria-label="Dark Mode"><svg class="svg-icon" viewbox="0 0 20 20"> <path fill="none" d="M3.183,9.381H0.704v1.239h2.479V9.381z M2.989,16.135l0.876,0.877l1.752-1.754l-0.876-0.875L2.989,16.135z M17.012,3.866l-0.877-0.876l-1.752,1.752l0.875,0.876L17.012,3.866z M10.62,0.705H9.38v2.479h1.239V0.705z M5.618,4.742 L3.865,2.989L2.989,3.866l1.753,1.752L5.618,4.742z M14.383,15.258l1.752,1.754l0.877-0.877l-1.754-1.752L14.383,15.258z M9.38,19.297h1.239v-2.48H9.38V19.297z M16.816,9.381v1.239h2.479V9.381H16.816z M10,5.042c-2.738,0-4.958,2.22-4.958,4.958 c0,2.738,2.22,4.959,4.958,4.959c2.738,0,4.958-2.221,4.958-4.959C14.958,7.263,12.738,5.042,10,5.042z M10,13.727 c-2.058,0-3.726-1.668-3.726-3.727c0-2.058,1.668-3.726,3.726-3.726c2.059,0,3.727,1.668,3.727,3.726 C13.727,12.059,12.059,13.727,10,13.727z"></path></svg><span class="icon-fallback-text">Night Mode</span></button>';

  // Get our newly insert toggle
  var darkMode = document.querySelector('#dark-mode');
  if (!darkMode) return;

  // When clicked, toggle night mode on or off
  darkMode.addEventListener('click', function (event) {
    event.preventDefault();
    document.documentElement.classList.toggle('theme-dark');
    if ( document.documentElement.classList.contains('theme-dark') ) {
      localStorage.setItem('darkMode', true);
      return;
    }
    localStorage.removeItem('darkMode');
  }, false);

})(window, document);


// Lazy Load Images
imagesLoaded( document.querySelector('#content'), function( instance ) {
  console.log('all images are loaded');

  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload",
    load_delay: 300
  });
});

