"use strict";

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
                    <div class="img" style="background-image:url(img/blog/'+data[i].photo+');"></div>\
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