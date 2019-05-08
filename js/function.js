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

function generateTestimonial(data){
    var HTML = '';

    if (!Array.isArray(data)){
        return HTML;
    }

    if (data.length > 0){
        var i=2;
        HTML += '<img src='+data[i].avatar+' alt= '+data[i].name+'>\
                <p>'+data[i].p+'</p>\
                <h4>'+data[i].name+'</h4>\
                <p>'+data[i].position+'</p>';
    }
    return HTML;
}