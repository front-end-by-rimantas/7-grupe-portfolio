"use strict";

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