(function() {
    var APP_NAMESPACE = 'appNamespace';
    var MODULE_NAME = 'observer';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};
    window[APP_NAMESPACE][MODULE_NAME] = function() {
        var _$ = {};
        var _config = {};

        return {
            init: function(element) {
                _$.element = element;
                console.log(_$.element);
            },
            destroy: function() {
                _$.element = null;
            }
        }
    };
})();
