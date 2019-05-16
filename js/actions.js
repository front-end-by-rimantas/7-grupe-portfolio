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
    // - 
    $(document).scroll(function(){
        detectClosestVisibleSection( $(document).scrollTop() );
    });

// HERO

// ABOUT US
document.querySelector('.info-box #sociali-icona').innerHTML = generateSocialNetworks(social_stuff);

// SERVICES
document.querySelector('#services .service-list').innerHTML = generateServices( services );

// RESUME

// PORTFOLIO

// TESTIMONIALS
document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(testimonials, 0);

// BLOG
document.querySelector('#blog .blog-list').innerHTML = generateRandomBlog( blog );

// CONTACT
document.querySelector('#contact_me #contact-info-list').innerHTML = generateContactInfo( contacts );

// FOOTER
document.querySelector('#footer_top #social-icons').innerHTML = generateSocialNetworks(social_networks);

