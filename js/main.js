$(document).ready(function(){

    $(window).scroll(function(){

      if($(this).scrollTop() > 250){
        $('.nbar').addClass('down');
        $("nav ul li a").addClass('changcolor');
        $("nav ul li .pink").addClass("changpink")
        

      }else{
      $('.nbar').removeClass('down');
      $("nav ul li a").removeClass('changcolor');
        $("nav ul li .pink").removeClass("changpink")
      };
    
    });



})
