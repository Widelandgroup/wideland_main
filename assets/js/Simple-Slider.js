$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper ('.swiper-container',{
        
        init:true,
        speed:3000,
        autoplay:true,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        updateOnWindowsResize:true,
        disableoninteraction:false,
                               
    });
    
});