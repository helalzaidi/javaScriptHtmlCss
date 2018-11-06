$(document).ready(function(){

        //options
     var speed = 500; //Faded time
     var autoSwitch = true; //auto slider option
     var autoSwitch_speed = 4000; //Auto slider speed.

     //add initial active class
     $('.slide').first().addClass('active');

     //hide all slides
     $('.slide').hide();

     //show first slide

     $('.active').show();

     //Next handler
     $('#next').on('click', nextSlide);

     //Previous handler

     $('#prev').on('click', prevSlide);

     //auto switch
    if(autoSwitch == true){
        setInterval( nextSlide,autoSwitch_speed);
    }

    //function to switch next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    //function previous slide
    function prevSlide(){

        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);

    }

});