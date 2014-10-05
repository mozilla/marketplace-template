(function() {

// Please leave quotes around keys! They're needed for Space Heater.
var routes = window.routes = [
    {'pattern': '^/$', 'view_name': 'hello_world'},
];

// Only `require.js` has `window.require.defined`, so we can use this to
// sniff for whether we're using the minified bundle or not. (In production
// we use commonplace's `amd.js`.)
if (window.require.hasOwnProperty('defined')) {
    // The minified JS bundle doesn't need some dev-specific JS views.
    routes = routes.concat([
        {'pattern': '^/tests$', 'view_name': 'tests'}
    ]);
}

var dependencies = routes.map(function(route) {
    return 'views/' + route.view_name;
});

define('routes', dependencies, function() {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        route.view = require('views/' + route.view_name);
    }
    return routes;
});

})();
