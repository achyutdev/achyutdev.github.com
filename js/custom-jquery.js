$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#contact');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top-50) {
          $(".navbar").css('background-color', '#77A836');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});