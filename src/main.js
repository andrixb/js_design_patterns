(function() {
    var componentOne = document.querySelector('.componentOne__base');
    var componentTwo = document.querySelector('.componentTwo__base');

    var newTextOne = 'New Text For COMPONENT ONE';
    var newTextTwo = 'New Text For COMPONENT TWO';

    window.appNamespace.modulePattern().init(componentOne);
    window.appNamespace.modulePattern().init(componentTwo);
    
    window.appNamespace.modulePattern().newTextToChange(newTextOne);
    window.appNamespace.modulePattern().newTextToChange(newTextTwo);
})();
