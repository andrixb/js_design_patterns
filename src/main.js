(function () {
    var newTextOne = 'New Text For COMPONENT ONE';
    var newTextTwo = 'New Text For COMPONENT TWO';

    var componentOne = document.querySelector('.componentOne__base');
    var componentTwo = document.querySelector('.componentTwo__base');

    window.appNamespace.modulePattern().init(componentOne, newTextOne);
    window.appNamespace.modulePattern().init(componentTwo, newTextTwo);
})();
