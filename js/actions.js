"use strict";

// HEADER
// jeigu paspaude ant menu nuorodos, tai:
$('#header nav > a').click(function(){
    // - pasalinu stiliu nuo visu nuorodu
    $('#header nav > a').removeClass('active');
    // - pazymime paspaustaja nuoroda (raudonas mygtuko stilius)
    // this - reprezentuoja einamaji paspausta elementa
    $(this).addClass('active');
});

// scroliname ir apskaiciuojame kuria nuoroda reikia pazymeti
    detectClosestVisibleSection( $(document).scrollTop() );
    headerDesignState();

    $(document).scroll(function(){
        detectClosestVisibleSection( $(document).scrollTop() );
        headerDesignState();
    });

$('#hamburger').click(function(){
    $('#header').toggleClass('show-menu');
});

// HERO

// ABOUT US
document.querySelector('.info-box #sociali-icona').innerHTML = generateSocialNetworks(social_stuff);

// SERVICES
document.querySelector('#services .service-list').innerHTML = generateServices( services );

// RESUME

// PORTFOLIO
document.querySelector('#portfolio .gallery-list').innerHTML = generatePortfolio( portfolio );
$('#portfolio .gallery-filter > div').click(function(){
    var clicked = $(this).text();
    $('#portfolio .gallery-filter > div').removeClass('active');
    $(this).addClass('active');
    if ( clicked === 'All' ) {
        $('#portfolio .gallery-list > .gallery-item').show();
    } else {
        $('#portfolio .gallery-list > .gallery-item').hide();
        $('#portfolio .gallery-list > .gallery-item').each(function(){
            if ( $(this).find('.tag').text() === clicked ) {
                $(this).show();
            }
        });
    }
});

// TESTIMONIALS
document.querySelector("#testimonials .testimonials-list").innerHTML += generateTestimonial(testimonials);

var isDown = false,
    testimonialsList = $("#testimonials .testimonials-list"),
    initialMouseX,
    diferenceMouseX,
    width = parseInt(testimonialsList.width()),
    item_width = parseInt(testimonialsList.find('.item').width()),
    current_pos = 2,
    positions = width / item_width ,
    animateComplete = true;

$(window).resize(function(){
    item_width = parseInt(testimonialsList.find('.item').width());
    testimonialsList.css('margin-left', '-'+ (item_width * current_pos) + 'px');
});

$('#go-left').click(function(){
    if(animateComplete === true){
        animateComplete = false;
        current_pos--;        
        testimonialsList.animate({
            'margin-left': '-' + (item_width * current_pos) + 'px'
        }, 750, function() {
            if ( current_pos === 0 ) {
                current_pos = positions - 2;
                $(this).css('margin-left', '-'+ (item_width * current_pos) + 'px');
            }
            animateComplete = true;
        });
    }
});

$('#go-right').click(function(){
    if(animateComplete === true){
        animateComplete = false;
        current_pos++;
        testimonialsList.animate({
            'margin-left': '-' + (item_width * current_pos) + 'px'
        }, 750, function() {
            if ( current_pos === positions -1 ) {
                current_pos = 1;
                $(this).css('margin-left', '-'+ (item_width * current_pos) + 'px');
            }
            animateComplete = true;
        });
    }
});

$('#testimonials .drag-layer').mousedown(function() {
    if ( animateComplete === true ) {
        initialMouseX = event.clientX;
        isDown = true;
        diferenceMouseX = 0;
    }
});
$('body').mouseup(function() {
    if(!isDown){
        return;
    }
    if(diferenceMouseX === 0){
        shift = 0;
    } else if(diferenceMouseX < 0){
        current_pos--;
    } else {
        current_pos++;
    }
    if ( animateComplete === true ) {
        animateComplete = false;
        testimonialsList.animate({
            'margin-left': '-' + (item_width * current_pos) + 'px'
        }, 750, function() {
            if ( current_pos === positions -1 ) {
                current_pos = 1;
                $(this).css('margin-left', '-'+ (item_width * current_pos) + 'px');
            }
            if ( current_pos === 0 ) {
                current_pos = positions - 2;
                $(this).css('margin-left', '-'+ (item_width * current_pos) + 'px');
            }
            animateComplete = true;
        });
    }
    isDown = false;
    return;
});
$('body').mousemove(function() {
    if(!isDown){
        return;
    }
    diferenceMouseX = initialMouseX - event.clientX;
    testimonialsList.css('margin-left', '-' + ( (item_width * current_pos) + diferenceMouseX) + 'px');
});

document.querySelector('#testimonials .drag-layer').addEventListener("touchstart", function(e) {
    var event = e;
    if ( animateComplete === true ) {        
        initialMouseX = event.touches[0].clientX;           
        isDown = true;
        diferenceMouseX = 0;
        width = parseInt(testimonialsList.width());
        item_width = parseInt(testimonialsList.find('.item').width());
        margin = parseInt(testimonialsList.css('margin-left'));
    }
});
document.querySelector('body').addEventListener("touchend",function(e) {
    if(!isDown){
        return;
    }
    if(diferenceMouseX === 0){
        shift = 0;
    } else if(diferenceMouseX < 0){
        shift = (item_width);
    } else {
        shift = -(item_width);
    }
    if ( animateComplete === true ) {
        animateComplete = false;
        testimonialsList.animate({
            'margin-left' : margin + shift + 'px'
        }, 500, function() {
            width = parseInt($(this).width());
            item_width = parseInt($(this).find('.item').width());
            margin = parseInt($(this).css('margin-left'));
            if ( margin === 0) {
                $(this).css('margin-left', '-'+ (width - 2*item_width) + 'px');
            }
            if ( -margin === (width - item_width) ) {
                $(this).css('margin-left', '-'+ (item_width) + 'px');
            }
            animateComplete = true;
            current_pos = Math.abs(margin) / item_width;
            // Animation complete.
        });
    }
    isDown = false;
    return;
});
document.querySelector('body').addEventListener("touchmove", function(e) {
    if(!isDown){
        return;
    }
    diferenceMouseX = initialMouseX - e.touches[0].clientX;
    testimonialsList.css('margin-left', (margin - diferenceMouseX) + 'px');
});

// BLOG
document.querySelector('#blog .blog-list').innerHTML = generateRandomBlog( blog );

// CONTACT
document.querySelector('#contact_me #contact-info-list').innerHTML = generateContactInfo( contacts );

// FOOTER
document.querySelector('#footer_top #social-icons').innerHTML = generateSocialNetworks(social_networks);

