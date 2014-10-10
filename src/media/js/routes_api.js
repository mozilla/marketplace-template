define('routes_api', [], function() {
    // List API routes here.
    // E.g.:
    // {
    //     "route": "/foo/bar/{0}",
    //     "another_route": "/foo/bar/{0}/asdf"
    // }
    return {
        'fxa-login': '/api/v2/account/fxa-login/',
        'login': '/api/v2/account/login/',
        'logout': '/api/v2/account/logout/',
        'site-config': '/api/v2/services/config/site/?serializer=commonplace',
    };
});
