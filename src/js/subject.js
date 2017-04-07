(function() {
    var APP_NAMESPACE = 'appNamespace';
    var MODULE_NAME = 'subject';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};
    window[APP_NAMESPACE][MODULE_NAME] = function() {
        var _$ = {};
        var _config = {
            btn: '.' + MODULE_NAME + '__btn',
            msg: '.' + MODULE_NAME + '__containerBtn',
        };

        function _setBtn() {
            _$.btn = _$.element.querySelector(_config.btn);
        }

        // get the attribute which contains a message
        function _getInfoToSend() {
            _$.infoMsg = _$.element.querySelector(_config.msg)
                                   .getAttribute('data-message');
        }

        // create custom event and dispatch the message to listeners
        function _notifyEvent(event) {
            console.log(event.target);

        }
        
        // add event listener to button and dispatch the event
        function _addEvents() {
            _$.btn.addEventListener('click', function(event) {
                _getInfoToSend();
                _notifyEvent(event);
            })
        }

        return {
            init: function(element) {
                _$.element = element;
                _setBtn();
                _addEvents();
            },
            destroy: function() {
                _$.element = null;
            }
        }
    };
})();
