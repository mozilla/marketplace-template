define('init',
    ['core/init', 'core/log', 'helpers_local', 'routes', 'settings_app'],
    function(init, log, helpers_local, routes, settingsApp) {

    var logger = log('init');
    logger.log('dependencies loaded');

    // Put any code that needs to run to initialize the app here or in the
    // dependencies.

    logger.log('done');
});

