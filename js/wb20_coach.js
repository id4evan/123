document.addEventListener('DOMContentLoaded', function(event)
{
   var testimonialsCarousel = new bootstrap.Carousel('#testimonialsCarousel', {interval: 3000, pause: false});
});
$(document).ready(function()
{
   $("a[href*='#formLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_formLayoutGrid').offset().top }, 600, 'easeInCubic');
   });
});
