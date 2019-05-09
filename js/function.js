"use strict";
var activeTestimonial = 0;

function generateServices( data ) {
    var HTML = '';

    if ( !Array.isArray(data) ) {
        return HTML;
    }

    // konstravimas...
    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="service">\
                    <i class="fa fa-'+data[i][0]+'"></i>\
                    <h3>'+data[i][1]+'</h3>\
                    <p>'+data[i][2]+'</p>\
                </div>';
    }

    return HTML;
}

function generateTestimonial( data, activeTestimonial=0 ){
    var HTML = '',
        testimonial;
        
    if (!Array.isArray(data)){
        return HTML;
    }

    if ( data.length === 0 ||
         !data[activeTestimonial] ){
        return HTML;
    }
    testimonial = data[activeTestimonial];

    if ( testimonial.avatar &&
         testimonial.p &&
         testimonial.name ){
        HTML += '<img src='+testimonial.avatar+' alt= '+testimonial.name+'>\
                <p>'+testimonial.p+'</p>\
                <h4>'+testimonial.name+'</h4>';
        if ( testimonial.position ) {
            HTML += '<p>'+testimonial.position+'</p>';
        }
    }
    return HTML;
}

function changeTestimonial( direction, data ){
    var target_element = document.querySelector('#visible_testimonial');

    if ( direction === 'left' ) {
        activeTestimonial++;
        if( activeTestimonial === data.length ){
            activeTestimonial = 0;
        }
    } else if ( direction === 'right' ) {
        activeTestimonial--;
        if( activeTestimonial < 0 ){
            activeTestimonial = data.length - 1;
        }
    } else {
        return;
    }

    return target_element.innerHTML = generateTestimonial(data, activeTestimonial);
};