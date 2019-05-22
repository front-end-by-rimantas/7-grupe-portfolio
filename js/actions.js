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
document.querySelector('#testimonials .testimonials-list').innerHTML = generateTestimonial(testimonials, 0);

$('#go-left').click(function(){
    $("#testimonials .testimonials-list").animate({
        'margin-left': '-=100%'
    }, 1000, function() {
        var width = parseInt($(this).width()),
            item_width = parseInt($(this).find('.item').width()),
            margin = parseInt($(this).css('margin-left'));
        if ( -margin === (width - item_width) ) {
            $(this).css('margin-left', '-'+ (item_width) + 'px');
        }
        // Animation complete.
    });
});

$('#go-right').click(function(){
    $("#testimonials .testimonials-list").animate({
        'margin-left': '+=100%'
    }, 1000, function() {
        var width = parseInt($(this).width()),
            item_width = parseInt($(this).find('.item').width()),
            margin = parseInt($(this).css('margin-left'));
        if ( margin === 0 ) {
            $(this).css('margin-left', '-'+ (width - 2*item_width) + 'px');
        }
        // Animation complete.
    });
});

var isDown = false,
    testimonialsList = $("#testimonials .testimonials-list"),
    initialX,
    initialMouseX,
    diferenceMouseX,
    width,
    item_width,
    margin,
    shift,
    aunimateComplete = true;

$('#testimonials .item')
.mousedown(function() {
    if ( aunimateComplete === true ) {
        initialX = parseInt(testimonialsList.css('margin-left'));
        initialMouseX = event.clientX;
        isDown = true;
        width = parseInt(testimonialsList.width());
        item_width = parseInt(testimonialsList.find('.item').width());
        margin = parseInt(testimonialsList.css('margin-left'));
    }
})
.mouseup(function() {
    if(!isDown){
        return;
    }
    if(diferenceMouseX === 0){
        shift = 0;
    } else if(diferenceMouseX < 0){
        shift = (item_width + diferenceMouseX);
    } else {
        shift = -(item_width - diferenceMouseX);
    }
    if ( aunimateComplete === true ) {
        aunimateComplete = false;
        testimonialsList.animate({
            'margin-left' : '+=' + shift + 'px'
        }, 1000, function() {
            var width = parseInt($(this).width()),
                item_width = parseInt($(this).find('.item').width()),
                margin = parseInt($(this).css('margin-left'));
            if ( margin === 0 ) {
                $(this).css('margin-left', '-'+ (width - 2*item_width) + 'px');
            }
            if ( -margin === (width - item_width) ) {
                $(this).css('margin-left', '-'+ (item_width) + 'px');
            }
            aunimateComplete = true;
            // Animation complete.
        });
    }
    isDown = false;
    return;
})
.mousemove(function() {
    if(!isDown){
        return;
    }
    diferenceMouseX = initialMouseX - event.clientX;
    testimonialsList.css('margin-left', (initialX - diferenceMouseX) + 'px');
});

// BLOG
document.querySelector('#blog .blog-list').innerHTML = generateRandomBlog( blog );

// CONTACT
document.querySelector('#contact_me #contact-info-list').innerHTML = generateContactInfo( contacts );

// FOOTER
document.querySelector('#footer_top #social-icons').innerHTML = generateSocialNetworks(social_networks);

