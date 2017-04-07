(function () {
    var subjectEl = document.querySelector('.subject__container');
    var observers = document.querySelectorAll('.observer__container');
    var totObservers = [];

    var Observer = function (element) {
        var _$ = {
            element: element
        };

        var _config = {
            msg: '.observer__msg'
        }

        return {
            notify: function (index) {
                _$.msg = _$.element.querySelector(_config.msg);
                _$.msg.innerHTML = 'Observer ' + index + ' is notified!';
            }
        };
    };

    var Subject = function (element) {
        var _$ = {
            observers: [],
            element: element
        };

        function _getBtn() {
            _$.btn = _$.element.querySelector('.subject__btn');
        }
        function _addEvent() {
            _$.btn.addEventListener('click', function(event) {
                for (var i = 0; i < _$.observers.length; i++) {
                    _$.observers[i].notify(i);
                }
            }, false);
        }

        return {
            init: function() {
                _getBtn();
                _addEvent();
            },
            subscribeObserver: function (observer) {
                if (_$.observers !== null) {
                    _$.observers.push(observer);
                } else {
                    _$.observers = [];
                }

            },
            unsubscribeObserver: function (observer) {
                var index = _$.observers.indexOf(observer);
                if (index > -1) {
                    _$.observers.splice(index, 1);
                }
            },
            notifyObserver: function (observer) {
                var index = _$.observers.indexOf(observer);
                if (index > -1) {
                    _$.observers[index].notify(index);
                }
            },
            notifyAllObservers: function () {
                for (var i = 0; i < _$.observers.length; i++) {
                    _$.observers[i].notify(i);
                }
            }
        };
    };

    var subject = new Subject(subjectEl);

    for (var i = 0; i < observers.length; i++) {
        totObservers.push(new Observer(observers[i]));
    }

    for (var i = 0; i < observers.length; i++) {
        subject.subscribeObserver(totObservers[i]);
    }

    subject.init();

})();
