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

// FOOTER
document.querySelector('#footer_top #social-icons').innerHTML = generateSocialNetworks(social_networks);