(function() {
    var subject = document.querySelector('.subject__container');
    var observers = document.querySelectorAll('.observer__container');

    window.appNamespace.subject().init(subject);

    for (var i = 0; i < observers.length; i++) {
        window.appNamespace.observer().init(observers[i]);
    }
})();
