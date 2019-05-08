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

function generateTestimonial(data, activeTestimonial=0){
    var HTML = '';
    var i = activeTestimonial;
    if (!Array.isArray(data)){
        return HTML;
    }

    if (data.length > 0){
        HTML += '<img src='+data[i].avatar+' alt= '+data[i].name+'>\
                <p>'+data[i].p+'</p>\
                <h4>'+data[i].name+'</h4>\
                <p>'+data[i].position+'</p>';
    }
    return HTML;
}

function changeTestimonial(direction,data){
    switch(direction){
        case 'left':
            if(activeTestimonial + 1 === data.length){
                activeTestimonial = 0;
                document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(data, activeTestimonial);
                break;
            }
            activeTestimonial++;
            document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(data,activeTestimonial);
            break;
        case 'right':
        if(activeTestimonial-1 < 0 ){
            activeTestimonial = data.length -1;
            document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(data, activeTestimonial);
            break;
        }
        activeTestimonial--;
        document.querySelector('#testimonials .testimonial').innerHTML = generateTestimonial(data,activeTestimonial);
            break;
        default:
            break;
    }
    
};