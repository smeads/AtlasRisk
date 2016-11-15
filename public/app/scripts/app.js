(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'app/templates/home.html'
      })

      .state('entities', {
        url: '/entities',
        controller: 'EntitiesCtrl as entities',
        templateUrl: 'app/templates/entities.html'
      })

      .state('entityAssets', {
        url: '/entity-assets',
        controller: 'entityAssetsCtrl as entityAssets',
        templateUrl: 'app/templates/entity-assets.html'
      });
  }

angular
   .module('atlasRisk', ['ui.router'])
   .config(config);

})();
