(function() {

// Please leave quotes around keys! They're needed for Space Heater.
var routes = window.routes = [
    {'pattern': '^/$', 'view_name': 'hello_world'},
    {'pattern': '^/tests$', 'view_name': 'tests'},
    {'pattern': '^/fxa-authorize$', 'view_name': 'fxa_authorize'}
];

define('routes', [
    'views/hello_world',
    'views/tests',
    'views/fxa_authorize',
], function() {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        route.view = require('views/' + route.view_name);
    }
    return routes;
});

})();
