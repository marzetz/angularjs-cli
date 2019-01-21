const app = require('./app.module');
(() => {
    app.config(routerConfig);
    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                component: 'appPageHome',
                resolve: {
                    sampleData: function() {
                        this.$inject = [];

                        return 'sampleValue';
                    }
                }
            })
    }
})();
