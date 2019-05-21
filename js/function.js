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
function generatePortfolio( data ) {
    var gellary_item = document.getElementById('portfolio_item_template').innerHTML,
        HTML_filter = '<div class="active">All</div>',
        unique_tags = [];
    
    // einame per duomenis ir issitraukiame tag'us
    for ( var i=0; i<data.length; i++ ) {
        if ( unique_tags.indexOf( data[i].tag ) === -1 ) {
            unique_tags.push( data[i].tag );
            HTML_filter += '<div>'+data[i].tag+'</div>';
        }
    }
    document.querySelector('#portfolio .gallery-filter').innerHTML = HTML_filter;
    
    return template.render( gellary_item, data );
}

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
        HTML += '<img src="img/testimonials/'+testimonial.avatar+'" alt= "'+testimonial.name+'">\
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
                    <div class="blog-textarea">\
                        <h3>'+post.title+'</h3>\
                        <div class="date">Posted on '+post.date+'</div>\
                        <p>'+post.description+'...</p>\
                    </div>\
                    <a href="'+post.url+'" class="btn btn-red btn-flattest btn-shadow">Read more</a>\
                </div>';
    }
    return HTML;
}

// CONTACT
function generateContactInfo( data ){
    var HTML='';

    if ( !Array.isArray(data) ||
            data.length === 0 ) {                
        return HTML;
    }

    for(var i = 0; i < data.length; i++ ){
        var contact = data[i];
        if( !contact.type || 
            !Array.isArray(contact.info) ||
            contact.info.length === 0 ){                
            continue;
        }
        HTML+= '<div class="contact-info">\
                <i class="fa fa-'+contact.icon+'"></i>\
                <h4>'+contact.type+':</h4>';
        for(var j = 0; j < contact.info.length; j++ ){
            HTML+= '<p>'+contact.info[j]+'</p>';
        }
        HTML+= '</div>';
    }
    return HTML;
}

// FOOTER
function generateSocialNetworks( data ){
    var HTML = '',
        icon;

    if( !Array.isArray(data)){
        return HTML;
    }

    for(var i = 0; i < data.length; i++){
        icon = data[i];
        if(!icon.name || !icon.url){
            continue;
        }
        HTML += '<a href="'+icon.url+'" class="fa fa-'+icon.name+'"/>';
    }

    return HTML;
}

function detectClosestVisibleSection( scrollTop ) {
    var a_tags = $('#header nav > a'),
        links = [],
        top = [];
    
    // visos nuorodos
    a_tags.each( function(){
        links.push( $(this).attr('href') );
    });
    
    // kokiuose ausciuose yra nuorodas reprezentuojancios sekcijos
    for ( var i=0; i<links.length; i++ ) {
        if ( links[i] === '#' ) {
            top.push( 0 );
        } else {
            top.push( Math.floor( $(links[i]).position().top ) );
        }
    }

    // nustatome artimiausia sekcija, kurioje esu
    for ( var i=0; i<top.length; i++ ) {
        if ( top[i] <= scrollTop ) {
            $('#header nav > a').removeClass('active');
            $('#header nav > a').eq(i).addClass('active');
        } else {
            break;
        }
    }

    // top.push(Infinity);
    // // nustatome artimiausia sekcija, kurioje esu
    // for ( var i=0; i<top.length; i++ ) {
    //     // pirmoji sekcija, kuri jau yra per toli nei esu nuscrolines
    //     if ( top[i] > scrollTop ) {
    //         $('#header nav > a').removeClass('active');
    //         $('#header nav > a').eq(i-1).addClass('active');
    //         break;
    //     }
    // }

    return;
}

function headerDesignState() {
    if ( $(document).scrollTop() < 70 ) {
        $('#header').addClass('header-transparent');
    } else {
        $('#header').removeClass('header-transparent');
    }
    return;
}