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
       //Convert the ifs to switch statements
        //-----------Our services-----------Fade in and slide in from the side
        if(y >=100)
            {
                $('.circles').fadeIn(2000);
                $('.circle1').addClass('animate');
                $('.circle3').addClass('animate');
                   
            }
        //---------------About-------------Fade in And slide in individually
        if(y >=500)
            {
                $('.aCell').fadeIn(2000); 
                $('.bCell').addClass('animate');
                //individual Circles animated and delayed
                $('.circ1').animate({right: '0px'},800);
                $('.circ2').animate({right: '0px'},950);
                $('.circ3').animate({right: '0px'},1100);
                $('.circ4').animate({right: '0px'},1200);
                
                //Center text column
                 $('.cCell').animate({top: '0px'},1200);
                
            }
        //--------------------Mission Staement-----------------
        if(y >=1500)
            {
               //message content boxes
                 $('.mission1').addClass('anim-hop').animate({ opacity:1});;
                setTimeout(function(){
                    $('.mission2').addClass('anim-hop').animate({ opacity:1});
                },200);
                
                setTimeout(function(){
                    $('.mission3').addClass('anim-hop').animate({ opacity:1});
                },400);
                
               //Bottom Circles
                $('.grow1').addClass('anim-grow').animate({ opacity:1});
               
                setTimeout(function(){
                    $('.grow2').addClass('anim-grow').animate({ opacity:1});
                },200);
                
                setTimeout(function(){
                    $('.grow3').addClass('anim-grow').animate({ opacity:1});
                },400);
            }
        //-------------Meet the Team--------------------
        if(y >=2200)
            {
                $('.team-container').delay(100).fadeIn();
                
               $('.team-1').animate({left: '0px'},800);
                $('.team-2').animate({right: '0px'},800);
            }
    });
    
});

 

    