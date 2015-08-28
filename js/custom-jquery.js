$(document).ready(function(){       
   var scroll_start = 0;
   var contact_section = $('#contact');
   var contact = contact_section.offset();
   var portfolio_section =$('#portfolio');
   var portfolio=portfolio_section.offset();  
   console.log(contact);
   console.log(portfolio);
  if (contact_section.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start < contact.top-50 && scroll_start > portfolio.top-50) {
          $(".navbar").css('background-color', '#1D83C1');
       } 
      else if(scroll_start > contact.top-50){
        $(".navbar").css('background-color', '#77A836');
      }
      else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});