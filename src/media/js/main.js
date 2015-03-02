console.log('Sample Commonplace App');

define('main', ['init'], function() {
require([
    'core/forms',  // Comment this if your app has no forms.
    'core/l10n',
    'core/log',
    'core/login',  // Comment this if your app does not have accounts.
    'core/navigation',
    'core/settings',
    'core/user',  // Comment this if your app does not have accounts.
    'core/z',
    'templates',
], function(forms, l10n, log, login, navigation, settings, user, z, nunjucks) {
    var logger = log('main');

    logger.log('Dependencies resolved, starting init');

    z.body.addClass('html-' + l10n.getDirection());

    // Do some last minute template compilation.
    z.page.on('reload_chrome', function() {
        logger.log('Reloading chrome');
        $('#site-header').html(
            nunjucks.env.render('header.html'));
        $('#site-footer').html(
            nunjucks.env.render('footer.html'));

        z.body.toggleClass('logged-in', user.logged_in());
        z.page.trigger('reloaded_chrome');
    }).trigger('reload_chrome');

    z.body.on('click', '.site-header .back', function(e) {
        e.preventDefault();
        logger.log('← button pressed');
        navigation.back();
    });

    // Perform initial navigation.
    logger.log('Triggering initial navigation');
    z.page.trigger('navigate', [window.location.pathname + window.location.search]);

    logger.log('Initialization complete');
});
});
