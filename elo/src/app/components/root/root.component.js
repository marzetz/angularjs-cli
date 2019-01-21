const app = require('../../app.module');
(() => {
    app.component('appRoot', {
        template: require('./root.component.html'),
        controller: appRootController,
        bindings: {}
    });

    appRootController.$inject = [];

    function appRootController() {

        this.$onInit = () => {
        }
    }
})();
