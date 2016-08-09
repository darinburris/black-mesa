//wcagReports
//w3cReports
//w3cStatus

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

if (typeof wcagReports != 'undefined'){

    var
    wcagData = $.getJSON( wcagReports,
        function() {

            console.log(wcagData);
            var
            wcagSource      = $("#wcag").html(),
            wcagTemplate    = Handlebars.compile(wcagSource); 
            $('main').append(wcagTemplate(wcagData));

        }
    ).fail(
        function() {
            console.log( "error" );
        }
    );

};

if (typeof w3cReports != 'undefined'){

    var
    w3cData = $.getJSON( w3cReports,
        function() {

            var
            w3cSource      = $("#w3c").html(),
            w3cTemplate    = Handlebars.compile(w3cSource); 
            $('main').append(w3cTemplate(w3cData));

        }
    ).fail(
        function() {
            console.log( "error" );
        }
    );

};