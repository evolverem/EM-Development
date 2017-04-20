$(document).ready(function()
{
    //-------------Meet the team---------------------------------
    
    //----On hover effects for team member description
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
     
    //------------------------------Our Services & About Scrolling Effects-----------------
    $(window).scroll(function(event) {
       
        var y = $(this).scrollTop();
       
        //-----------Our services-----------Fade in and slide in from the side
        if(y >=300)
            {
                $('.circles').fadeIn(2000);
                $('.circle1').addClass('animate');
                $('.circle3').addClass('animate');
                   
            }
        //---------------About-------------Fade in And slide in individually
        if(y >=1000)
            {
                $('.aCell').fadeIn(2000); 
                $('.bCell').addClass('animate');
                //individual Circles animated and delayed
                $('.circ1').animate({right: '0px'},800);
                $('.circ2').animate({right: '0px'},950);
                $('.circ3').animate({right: '0px'},1100);
                $('.circ4').animate({right: '0px'},1200);
                
                //Center text column
                 $('.cCell').animate({top: '0px'},800);
                
            }
        if(y >=1500)
            {
              $('.grow1').addClass('animate'); 
              $('.inner1').addClass('animate');
            }
    });
    
});

 

    