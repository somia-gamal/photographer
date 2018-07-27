$(document).ready(function(){
      var _scrollTop  = $("#scrollToTop");
    var _header     = $(".header");
      $('.slider').bxSlider({
          speed:400,
          auto:true,
          autoHover:true,
          slideWidth:"800px",
          mode: 'fade'

          
      })
     _scrollTop.on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
    })
    $(window).on('scroll',function(){
        if($(this).scrollTop()>200){
              $(".navbar").css({
            backgroundColor:"rgba(5,13,26,1)"
        })
        }else{
            $(".navbar").css({
                backgroundColor:"rgba(0,0,0,0)"
            })
        }
        
    })
    
    	$('#seven').clickBubble({
		color: 'red',
		size: 40,
		time: 5,
		borderWidth: 3
	});
    });