$(document).ready(function()
{
   $('.team-1').hover(function(){
      $('.box1').css('opacity', 0).slideDown(500).animate({ opacity:1}, {queue: false, duration: 'slow'}); 
   },function(){
      $('.box1').css('opacity', 1).slideUp(500).animate({ opacity:0}, {queue: false, duration: 'slow'}); 
   });
    
   $('.team-2').hover(function(){
      $('.box2').css('opacity', 0).slideDown(500).animate({ opacity:1}, {queue: false, duration: 'slow'}); 
   },function(){
      $('.box2').css('opacity', 1).slideUp(500).animate({ opacity:0}, {queue: false, duration: 'slow'}); 
   });
     
    $(window).scroll(function(event) {
       
        var y = $(this).scrollTop();
       
        
        if(y >=300)
            {
                $('.circles').fadeIn();
                $('.circle1').addClass('animate');
                $('.circle3').addClass('animate');
                   
            }
        
        if(y >=1000)
            {
                $('.aCell').fadeIn();
                $('.bCell').addClass('animate');
                $('.dCell').addClass('animate'); 
            }
       
    });
    
});



    