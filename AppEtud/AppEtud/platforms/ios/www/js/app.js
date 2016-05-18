// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


//Un module permet d’encapsuler l’ensemble des éléments d’une application AngularJS.
// the 2nd parameter sont les dependances du module (namespace)
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngCordova'])

    //$toto se sont les services AngularJs : Services are javascript functions and are responsible to do a specific tasks only
    /*To use an Angular service, you add it as a dependency for the component (controller, service, filter or directive) that depends on the service. 
    Angular's dependency injection subsystem takes care of the rest.*/


.run(function($ionicPlatform, $cordovaDevice) {
  $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


      //    alert('Platform : ' + $cordovaDevice.getPlatform() + '\nModel: ' + $cordovaDevice.getModel());

      //creer une base de donnees sqlite locale  avec le service cordovaSQLite de ngCordova
    var db = $cordovaSQLite.openDB("myDB");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS etudiants (mat integer  primary key, nom text, prenom text, dateNaissance date, site text)");
  });
});

  });
})
