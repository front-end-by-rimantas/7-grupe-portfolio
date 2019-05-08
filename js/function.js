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
                    <div class="img" style="background-image:url(img/blog/'+data[i].photo+');"></div>\
                    <h3>'+data[i].title+'</h3>\
                    <div class="date">Posted on '+data[i].date+'</div>\
                    <p>'+data[i].description+'...</p>\
                    <a href="'+data[i].url+'" class="btn btn-red">Read more</a>\
                </div>';
    }

    return HTML;
}