(function () {
    var API_URL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho';
    var imgElement = document.querySelector('.image__element');
    var newObj = null;

    function MainObject(api) {
        this.data = '';
        this.apiURL = api;
        this.received = false;

        this.getData = function() {
            return this.data;
        };
    }

    MainObject.prototype = {
        fetchData: function () {
            fetch(this.apiURL, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                this.data = data.data;
                this.received = true;
            }).catch(function (err) {
                throw err;
            });
        }
    };

    newObj = new MainObject(API_URL);
    newObj.fetchData();

})();
