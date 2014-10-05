(function() {

// Please leave quotes around keys! They're needed for Space Heater.
var routes = window.routes = [
    {'pattern': '^/$', 'view_name': 'hello_world'},
    {'pattern': '^/tests$', 'view_name': 'tests'}
];

define('routes', [
    'views/hello_world',
    'views/tests',
], function() {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        route.view = require('views/' + route.view_name);
    }
    return routes;
});

})();
