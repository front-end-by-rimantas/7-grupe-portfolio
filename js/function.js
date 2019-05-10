"use strict";

// HEADER

// HERO

// ABOUT US

// SERVICES
function generateServices( data ) {
    var HTML = '';

    if ( !Array.isArray(data) ) {
        return HTML;
    }

    // konstravimas...
    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="service">\
                    <i class="fa fa-'+data[i].icon+'"></i>\
                    <h3>'+data[i].title+'</h3>\
                    <p>'+data[i].p+'</p>\
                </div>';
    }

    return HTML;
}

// RESUME

// PORTFOLIO

// TESTIMONIALS
var activeTestimonial = 0;

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

// BLOG

function generateBlog( data ) {
    var HTML = '',
        post,
        good = 0;

    if ( !Array.isArray(data) ||
         data.length === 0 ) {
        return HTML;
    }

    // konstravimas...
    for ( var i=0; i<data.length; i++ ) {
        post = data[i];
        // tikriname ar yra visi butinieji parametrai
        if ( !post.photo || post.photo.length < 5 ||
             !post.title ||
             !post.date || post.date.length < 12 ||
             !post.description ||
             !post.url ) {
            continue;
        }
        good++;
        
        HTML += '<div class="blog">\
                    <div class="img" style="background-image:url(img/blog/'+post.photo+');"></div>\
                    <h3>'+post.title+'</h3>\
                    <div class="date">Posted on '+post.date+'</div>\
                    <p>'+post.description+'...</p>\
                    <a href="'+post.url+'" class="btn btn-red">Read more</a>\
                </div>';
        
        // nustojame kurti post'us, jei radome 3 gerus/tinkamo formato(duomenu)
        if ( good >= 3 ) {
            break;
        }
    }

    return HTML;
}


function generateRandomBlog( data ) {
    var HTML = '',
        max_post_count = 3,
        position = 0,
        post,
        posted = [];

    if ( !Array.isArray(data) ||
            data.length === 0 ) {
        return HTML;
    }

    for ( var i=0; i<max_post_count; i++ ) {
        // nuo 0 iki (data.lenght - 1) => sveikasis skaicius
        position = Math.floor(Math.random() * data.length);

        post = data[position];
        // tikriname ar yra visi butinieji parametrai
        if ( !post.photo || post.photo.length < 5 ||
             !post.title ||
             !post.date || post.date.length < 12 ||
             !post.description ||
             !post.url
             /* tikriname ar nesidubliuoja pozicijos numeris */ ||
             posted.indexOf(position) >= 0 ) {
            i--;
            continue;
        }
        posted.push(position);
        
        HTML += '<div class="blog">\
                    <div class="img" style="background-image:url(img/blog/'+post.photo+');"></div>\
                    <h3>'+post.title+'</h3>\
                    <div class="date">Posted on '+post.date+'</div>\
                    <p>'+post.description+'...</p>\
                    <a href="'+post.url+'" class="btn btn-red">Read more</a>\
                </div>';
    }

    console.log(posted);
    
    return HTML;
}

// CONTACT

// FOOTER

function generateSocialNetworks( data ){
    var HTML = '',
        icon;

    if( !Array.isArray(data)){
        return HTML;
    }

    for(i = 0; i < data.length; i++){
        icon = data[i];
        if(!icon.name || !icon.url){
            continue;
        }
        HTML += '<a href="'+icon.url+'" class="fa fa-'+icon.name+'"/>';
    }

    return HTML;
}