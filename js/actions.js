"use strict";

document.querySelector('#services .service-list').innerHTML = generateServices( services );


document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(testimonials, activeTestimonial);