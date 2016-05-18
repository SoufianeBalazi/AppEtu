angular.module('app.controllers', [])

    //le controleur est chargé de fournir les données et les actions avec lesquelles l’utilisateur interagira dans les vues.

    /*The scope is the binding part(parite de liaison) between the HTML (view) and the JavaScript (controller).

    The scope is an object with the available properties and methods.

    The scope is available for both the view and the controller.*/
  
.controller('menuCtrl', function($scope) {
    
})
   
.controller('list_EtudiantsCtrl', function ($scope) {
   

    //var listEtu = localStorage.getItem("etudiants");
    $scope.names = ["aaa", "bbb", "ccc"];
      




})
   
.controller('detailCtrl', function($scope) {

})
   
.controller('modificationCtrl', function($scope) {

})
 
.controller('formulaireCtrl', function ($scope,$cordovaSQLite) {



    $scope.insert = function(nom, prenom,dateNaiss,site) {
        var query = "INSERT INTO etudiant (nom, prenom, dateNaiss,site) VALUES (?,?,?,?)";
        $cordovaSQLite.execute(db, query, [nom, prenom, dateNaiss, site]).then(function (res) {
            alert(res.insertId);
          
        }, function (err) {
            alert(err);
        });
    }
    //telerik
    //kendo ui for mobile (dataviz)
    //bouchaara.youssef gmail.com



    //test
/*
    $scope.addEtudiant = function (e) {
        alert(e);

    }*/

 
  /*  var etudiantObjet = {
        mat: "",
        nom: "",
        prenom: "",
        dateNaissance: "",
        site: ""
    };

    var etudiantObjet_json = JSON.stringify(etudiantObjet);
    localStorage.setItem("etudiant", etudiantObjet_json);
    console.log("objet", localStorage.getItem("etudiant"));*/
})

.controller('graphCtrl', function ($scope) {

})