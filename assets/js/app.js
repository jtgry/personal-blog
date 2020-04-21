
var themeButton = document.querySelector(".theme-button");
var root = document.getElementById('root');

themeButton.addEventListener("click", function() {
  root.classList.toggle("theme-dark");

  

});



// Image Process
imagesLoaded( document.querySelector('#content'), function( instance ) {
  console.log('all images are loaded');

  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload",
    load_delay: 300
  });
});
