"use strict";

// HEADER
// jeigu paspaude ant menu nuorodos, tai:
    // - pasalinu stiliu nuo visu nuorodu
    // - pazymime paspaustaja nuoroda (raudonas mygtuko stilius)

// scroliname ir apskaiciuojame kuria nuoroda reikia pazymeti
    // - 

// HERO

// ABOUT US

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

