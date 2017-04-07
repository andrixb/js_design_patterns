(function () {
    var imgElement = document.querySelector('.image__element');
    var IMG_URL = 'http://placehold.it/350x150';
    var newObj = null;

    function MainObject(url) {
        this.url = url;
    }

    MainObject.prototype = {
        assignSrc: function (element) {
            element.setAttribute('src', this.url);
        }
    };

    newObj = new MainObject(IMG_URL);
    newObj.assignSrc(imgElement);
})();
