// Dark Mode / Light Mode

/*
(function (window, document, undefined) {

  'use strict';

  // Feature test
  if (!('localStorage' in window)) return;

  // Get the navigation menu
  var nav = document.querySelector('.nav-items');
  var root = document.querySelector('nav');
  if (!nav) return;

  // Insert the night mode toggle
  if (document.documentElement.className != 'theme-dark'){
    root.innerHTML += '<button id="dark-mode" class="icon-link" alt="Dark Mode" aria-label="Dark Mode"><svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="icon-fallback-text">Night Mode</span></button>';
  }
  else{
    root.innerHTML += '<button id="dark-mode" class="icon-link" alt="Dark Mode" aria-label="Dark Mode"><svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span class="icon-fallback-text">Night Mode</span></button';
  }
  // Get our newly insert toggle
  var darkMode = document.querySelector('#dark-mode');
  if (!darkMode) return;

  // When clicked, toggle night mode on or off
  darkMode.addEventListener('click', function (event) {
    event.preventDefault();
    document.documentElement.classList.toggle('theme-dark');
    if ( document.documentElement.classList.contains('theme-dark') ) {
            darkMode.innerHTML = '<svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span class="icon-fallback-text">Night Mode</span>';

      localStorage.setItem('darkMode', true);
      return;
    }
    else{
    darkMode.innerHTML = '<svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="icon-fallback-text">Night Mode</span>';
    }
    localStorage.setItem('darkMode', false);
  }, false);

})(window, document);
*/

(function (window, document, undefined) {

  'use strict';

  // Feature test
  if (!('localStorage' in window)) return;

  // Get the navigation menu
  var nav = document.querySelector('.nav-items');
  var root = document.querySelector('nav');
  if (!nav) return;

  // Insert the night mode toggle
  if (document.documentElement.className != 'theme-dark'){
    root.innerHTML += '<button id="dark-mode" class="icon-link" alt="Dark Mode" aria-label="Dark Mode"><svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="icon-fallback-text">Night Mode</span></button>';
  }
  else if (document.documentElement.className != 'theme-retro'){
    root.innerHTML += '<button id="dark-mode" class="icon-link" alt="Dark Mode" aria-label="Dark Mode"><svg class="feather" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" color="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 12l.011.01M19 12l.011.01M22 12l.011.01M2 12c0 5.523 4.477 10 10 10a9.985 9.985 0 008-3.999L12 12l8-6.001A9.985 9.985 0 0012 2C6.477 2 2 6.477 2 12z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="icon-fallback-text">Night Mode</span></button>';
  }
  else{
    root.innerHTML += '<button id="dark-mode" class="icon-link" alt="Dark Mode" aria-label="Dark Mode"><svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span class="icon-fallback-text">Night Mode</span></button';
  }
  // Get our newly insert toggle
  var darkMode = document.querySelector('#dark-mode');
  if (!darkMode) return;

  var mode = localStorage.getItem('darkMode');
darkMode.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (mode === 'light') {
    // switch to dark mode
    document.documentElement.classList.remove('theme-retro');
    document.documentElement.classList.add('theme-dark');
    darkMode.innerHTML = '<svg class="feather" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" color="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 12l.011.01M19 12l.011.01M22 12l.011.01M2 12c0 5.523 4.477 10 10 10a9.985 9.985 0 008-3.999L12 12l8-6.001A9.985 9.985 0 0012 2C6.477 2 2 6.477 2 12z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="icon-fallback-text">Retro Mode</span>';
    localStorage.setItem('darkMode', 'dark');
    mode = 'dark';
  } else if (mode === 'dark') {
    // switch to retro mode
    document.documentElement.classList.remove('theme-dark');
    document.documentElement.classList.add('theme-retro');
    darkMode.innerHTML = '<svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span class="icon-fallback-text">Retro Mode</span>';
    localStorage.setItem('darkMode', 'retro');
    mode = 'retro';
  } else {
    // switch to light mode
    document.documentElement.classList.remove('theme-retro');
    document.documentElement.classList.remove('theme-dark');
    darkMode.innerHTML = '<svg class="feather" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="icon-fallback-text">Light Mode</span>';
    localStorage.removeItem('darkMode');
    mode = 'light';
  }
});

})(window, document);
// Lazy Load Images
imagesLoaded( document.querySelector('#page'), function( instance ) {
  console.log('📷 All images are loaded');

  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload",
    load_delay: 300
  });
});

