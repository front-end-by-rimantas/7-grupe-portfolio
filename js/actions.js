"use strict";

// HEADER

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