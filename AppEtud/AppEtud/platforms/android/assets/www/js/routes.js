angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('list_Etudiants', {
    url: '/listEtudiants',
    templateUrl: 'templates/list_Etudiants.html',
    controller: 'list_EtudiantsCtrl'
  })

  .state('detail', {
    url: '/detail',
    templateUrl: 'templates/detail.html',
    controller: 'detailCtrl'
  })

  .state('modification', {
    url: '/modification',
    templateUrl: 'templates/modification.html',
    controller: 'modificationCtrl'
  })

     .state('formulaire', {
         url: '/page1',
         templateUrl: 'templates/formulaire.html',
         controller: 'formulaireCtrl'
     })

  .state('graph', {
      url: '/page3',
      templateUrl: 'templates/graph.html',
      controller: 'graphCtrl'
  })

$urlRouterProvider.otherwise('/menu')

  

});