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
$('a[href^="#"]').on('click', function(e) {
   e.preventDefault();

   var target = this.hash;
   var $target = $(target);

   $('html, body').stop().animate({ 'scrollTop': $target.offset().top }, 900, $.bez([0.770, 0, 0.175, 1]), function () {
      window.location.hash = target;
   });
});

// open menu when clicking mobile button
document.querySelector('.mobile-btn').onclick = function() {
   document.querySelector('nav.main').classList.toggle('mobile-nav-opened');
   document.querySelector('.overlay').classList.toggle('visible');
}
