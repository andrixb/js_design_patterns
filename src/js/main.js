(function() {
    var publisher = document.querySelector('.publisher__container');
    var subscribers = document.querySelectorAll('.subscriber__container');

    window.appNamespace.publisher().init(publisher);

    for (var i = 0; i < subscribers.length; i++) {
        window.appNamespace.subscriber().init(subscribers[i]);
    }
})();
