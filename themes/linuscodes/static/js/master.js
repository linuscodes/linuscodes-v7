window.onscroll = function() {

   // add shadow to nav when page is scrolled
   if(window.pageYOffset > 0) {
      document.querySelector("nav.main").classList.add("has-shadow");
   } else {
      document.querySelector("nav.main").classList.remove("has-shadow");
   };

   // show elements if they are 100 pixels from the bottom of the viewport
   document.querySelectorAll(".scroll-into-view").forEach(function(element) {
      if((element.offsetTop - window.pageYOffset) <= (window.innerHeight - 100)) {
         element.classList.add("visible");
      }
   });
}

// add smooth scroll to all links with anchor
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//    anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//
//       $('body, html').animate({ 'scrollTop': (anchor.attr('href').offset().top - 70) }, 800)
//    });
// });

$('a[href^="#"]').on('click', function(e) {
   e.preventDefault();

   $('html, body').animate({ 'scrollTop': (document.querySelector(e.target.getAttribute('href')).offsetTop - 70) }, 800)
});
