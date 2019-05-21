"use strict";

// HEADER

// HERO

// ABOUT US

// SERVICES
/**
 * Takes an array of services and returns generated HTML.
 * @param {[]} data
 * @returns {string} HTML
 */
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
/**
 * Takes an array of testimonials figures out which one is active
 * and returnt generated HTLM of that testimonial.
 * @param {[]} data
 * @returns {string} HTML
 */
function generateTestimonial( data ){
    var HTML = '',
        testimonial,
        good_data = [];
        
    if ( !Array.isArray(data) ||
         data.length === 0 ){
        return HTML;
    }

    // pasitikriname pateiktus duomenis ir pasiliekame tik gerus is "data" kintamojo
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].avatar &&
             data[i].p &&
             data[i].name ){
            good_data.push( data[i] );
        }
    }

    if ( good_data.length === 0 ) {
        return HTML;
    }

    // atsiliepimai: paskutis + visi + pirmutinis
    data = [];
    data.push( good_data[good_data.length-1] );
    data = data.concat( good_data );
    data.push( good_data[0] );

    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="item" style="width: 20%;">\
                    <div class="content">\
                        <img src="img/testimonials/'+data[i].avatar+'" alt= "'+data[i].name+'">\
                        <p>'+data[i].p+'</p>\
                        <h4>'+data[i].name+'</h4>\
                    </div>\
                </div>';
    }

    var list = document.querySelector('#testimonials .testimonials-list');

    list.style.width = data.length * 100 + '%';
    list.style.marginLeft = '-200%';

    return HTML;
}
/**
 * Takes direction and an array of testimonials
 * and changes the current testimonial with the next one
 * in the supplied direction, will cycle to end/start of list
 * once reaches the start/end.
 * @param {string} direction one of values: left | right
 * @param {[]} data
 * @returns {void} changes active testimonial
 */
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
/**
 * Takes an array of blogs, chooses first 3 and returns generated HTML.
 * @param {[]} data
 * @returns {string} HTML
 */
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

/**
 * Takes an array of blogs, randomly chooses 3 and returns generated HTML.
 * @param {[]} data
 * @returns {string} HTML
 */
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
/**
 * Takes an array of contacts and returns generated HTML.
 * @param {[]} data
 * @returns {string} HTML
 */
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
/**
 * Takes an array of social networks 
 * and returns generated HTML with icons.
 * @param {[]} data
 * @returns {string} HTML
 */
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
/**
 * Detects the section we are scrolled to
 * and marks the section in header by changing its style.
 * @param {number} scrollTop - units in px
 */
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
/**
 * Detects our scroll position
 * and changes header design accordingly.
 */
function headerDesignState() {
    if ( $(document).scrollTop() < 70 ) {
        $('#header').addClass('header-transparent');
    } else {
        $('#header').removeClass('header-transparent');
    }
    return;
}
