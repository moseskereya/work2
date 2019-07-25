var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("back-content");
  const dots = document.querySelector('.dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
};

   showSlides();
   
   function prev(n){
     showSlides (slideIndex -n)
   }
    function next(n){
     showSlides (slideIndex +n)
   }


