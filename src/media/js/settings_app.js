define('settings_app',
    ['core/capabilities', 'core/settings', 'core/storage', 'settings_local'],
    function(capabilities, settings, storage, settingsLocal) {

     function offline_cache_enabled() {
        if (storage.getItem('offline_cache_disabled') || capabilities.phantom) {
            return false;
        }
        return window.location.search.indexOf('cache=false') === -1;
    }

    settings._extend({
        app_name: 'Firefox Marketplace App',
        default_locale: 'en-US',
        api_url: 'http://' + window.location.hostname,

        param_whitelist: ['q', 'sort'],
        api_param_blacklist: null,
        api_cdn_whitelist: {},

        // These are the only URLs that should be cached
        // (key: URL; value: TTL [time to live] in seconds).
        // Keep in mind that the cache is always refreshed asynchronously;
        // these TTLs apply to only when the app is first launched.
        offline_cache_whitelist: {},
        offline_cache_enabled: offline_cache_enabled,
        offline_cache_limit: 1024 * 1024 * 4, // 4 MB

        model_prototypes: {},

        fragment_error_template: 'errors/fragment.html',
        pagination_error_template: 'errors/pagination.html',

        switches: [],

        title_suffix: 'Firefox Marketplace App'
    });

    settings._extend(settingsLocal);
});
