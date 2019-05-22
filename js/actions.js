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
    $('#header nav').toggleClass('show-menu');
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
document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(testimonials, 0);

// BLOG
document.querySelector('#blog .blog-list').innerHTML = generateRandomBlog( blog );

// CONTACT
document.querySelector('#contact_me #contact-info-list').innerHTML = generateContactInfo( contacts );

// FOOTER
document.querySelector('#footer_top #social-icons').innerHTML = generateSocialNetworks(social_networks);

