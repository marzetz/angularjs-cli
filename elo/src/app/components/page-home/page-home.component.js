const app = require('../../app.module');
(() => {
    app.component('appPageHome', {
        template: require('./page-home.component.html'),
        controller: appPageHomeController,
        bindings: {}
    });

    appPageHomeController.$inject = [];

    function appPageHomeController() {

        this.$onInit = () => {
        }
    }
})();
