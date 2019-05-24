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

// HERO

// ABOUT US
document.querySelector('.info-box #sociali-icona').innerHTML = generateSocialNetworks(social_stuff);

// SERVICES
document.querySelector('#services .service-list').innerHTML = generateServices( services );

// RESUME

// PORTFOLIO

// TESTIMONIALS
document.querySelector("#testimonials .testimonials-list").innerHTML += generateTestimonial(testimonials);

var isDown = false,
    testimonialsList = $("#testimonials .testimonials-list"),
    initialMouseX,
    diferenceMouseX,
    width,
    item_width,
    margin,
    shift,
    current_pos = 2,
    animateComplete = true;

$(window).resize(function(){
    item_width = parseInt(testimonialsList.find('.item').width());
    testimonialsList.css('margin-left', '-'+ (item_width * current_pos) + 'px');
});

$('#go-left').click(function(){
    if(animateComplete === true){
        animateComplete = false;
        testimonialsList.animate({
            'margin-left': '-=100%'
        }, 750, function() {
            width = parseInt($(this).width());
            item_width = parseInt($(this).find('.item').width());
            margin = parseInt($(this).css('margin-left'));
            if ( -margin === (width - item_width) ) {
                $(this).css('margin-left', '-'+ (item_width) + 'px');
            }
            // Animation complete.
            current_pos = Math.abs(margin) / item_width;
            animateComplete = true;
        });
    }
});

$('#go-right').click(function(){
    if(animateComplete === true){
        animateComplete = false;
        $("#testimonials .testimonials-list").animate({
            'margin-left': '+=100%'
        }, 750, function() {
            width = parseInt($(this).width());
            item_width = parseInt($(this).find('.item').width());
            margin = parseInt($(this).css('margin-left'));
            if ( margin === 0 ) {
                $(this).css('margin-left', '-'+ (width - 2*item_width) + 'px');
            }
            // Animation complete.
            current_pos = Math.abs(margin) / item_width;
            animateComplete = true;
        });
    }
});

$('#testimonials .drag-layer').mousedown(function() {
    if ( animateComplete === true ) {
        initialMouseX = event.clientX;
        isDown = true;
        diferenceMouseX = 0;
        width = parseInt(testimonialsList.width());
        item_width = parseInt(testimonialsList.find('.item').width());
        margin = parseInt(testimonialsList.css('margin-left'));
    }
});
$('body').mouseup(function() {
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
        }, 750, function() {
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
$('body').mousemove(function() {
    if(!isDown){
        return;
    }
    diferenceMouseX = initialMouseX - event.clientX;
    testimonialsList.css('margin-left', (margin - diferenceMouseX) + 'px');
});

// BLOG
document.querySelector('#blog .blog-list').innerHTML = generateRandomBlog( blog );

// CONTACT
document.querySelector('#contact_me #contact-info-list').innerHTML = generateContactInfo( contacts );

// FOOTER
document.querySelector('#footer_top #social-icons').innerHTML = generateSocialNetworks(social_networks);

