define('routes_api', [], function() {
    // List API routes here.
    // E.g.:
    // {
    //     "route": "/foo/bar/{0}",
    //     "another_route": "/foo/bar/{0}/asdf"
    // }
    return {
        'login': '/api/v2/account/login/',
        'logout': '/api/v2/account/logout/',
        'consumer_info': '/api/v2/fireplace/consumer-info/',
    };
});
