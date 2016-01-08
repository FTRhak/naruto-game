module.exports = function (express) {
    function initUrlControllers(controllerClass) {
        var obj = new controllerClass();
        obj.actionMethods.forEach(function (el) {
            var action = el.action;
            var method = el.method;
            var url = el.url;
            express[method](url, obj[action]);
        });
    }

    var oneController = require('./controllers/PageController');
    initUrlControllers(oneController);
};
