(function() {
    'use strict';

    var MODULE_NAME = 'modulePattern',
        APP_NAMESPACE = 'appNamespace';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function() {
        // It hosts module states
        var _$ = {};

        // Initial module configuration
        var _config = {
            text: '.' + MODULE_NAME + '__text'
        };

        function _changeTextContent() {
            _$.text = _$.element.querySelector(_config.text);
            _$.text.innerHTML = _$.newText;
        };

        return {
            init: function(element, newText) {
                _$.element = element;
                _$.newText = newText;
                _changeTextContent();
            },
            destroy: function() {
                _$.element = null;
            }
        };
    };
})();
