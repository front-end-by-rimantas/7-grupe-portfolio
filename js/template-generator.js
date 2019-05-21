var template = (function(){

    /**
     * Rendering HTML from data using template
     * @param {string} html - element's HTML template
     * @param {[]} data - list of data objects, e.g. [{},{}...{}]
     * @returns {string} HTML
     */
    function render( html_template, data ){
        var HTML = '',
            HTML_item = '',
            keywords = [];

        if ( typeof(html_template) !== "string" || html_template.length < 1 ) {
            console.error('Template has to be a string type and not empty!');
            return HTML;
        }

        if ( !Array.isArray(data) ) {
            if ( typeof(data) === 'object' ) {
                data = [data];
            } else {
                console.error('Data is in bad condition... fix it...');
            }
        }

        for ( var i=0; i<data.length; i++ ) {
            keywords = Object.keys( data[i] );
            HTML_item = html_template;
            for ( var k=0; k<keywords.length; k++ ) {
                HTML_item = HTML_item.replace( '{{'+keywords[k]+'}}', data[i][ keywords[k] ] );
            }

            HTML += HTML_item;
        }
        return HTML;
    }

    return {
        render: render
    }
})();

// template.render('<div>{{name}} is {{age}} old</div>', [{name:"Martynas", age: 16}, {name:"Rasa", age: 40}]);