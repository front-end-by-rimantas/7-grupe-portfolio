"use strict";

document.querySelector('#services .service-list').innerHTML = generateServices( services );

document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(testimonials, 0);

document.querySelector('#blog .blog-list').innerHTML = generateRandomBlog( blog );