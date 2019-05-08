"use strict";

function generateServices( data ) {
    var HTML = ''

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

function generateBlog( data ) {
    var HTML = '';

    if ( !Array.isArray(data) ) {
        return HTML;
    }

    // konstravimas...
    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="blog">\
                    <div class="img"></div>\
                    <h3>Web design</h3>\
                    <div class="date">Posted on 25th Oct 2018</div>\
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, molestias...</p>\
                    <a href="#" class="btn btn-red">Read more</a>\
                </div>';
    }

    return HTML;
}