(function() {
    var APP_NAMESPACE = 'appNamespace';
    var MODULE_NAME = 'subscriber';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};
    window[APP_NAMESPACE][MODULE_NAME] = function() {
        var _$ = {};
        var _config = {
            textElement: '.' + MODULE_NAME + '__msg'
        };

        function _getTextElement() {
            _$.text = _$.element.querySelector(_config.textElement);
        }

        function _addEvent() {
            document.addEventListener('notify', function(event) {
                _$.text.innerHTML = event.detail;
            }, false);
        }

        return {
            init: function(element) {
                _$.element = element;
                _getTextElement();
                _addEvent();
            },
            destroy: function() {
                _$.element = null;
            }
        }
    };
})();
