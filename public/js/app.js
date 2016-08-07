
//Define the UploadApp module
var uploadApp = angular.module('uploadApp', []);

//Define the indexController on the uploadApp module
uploadApp.controller('indexController', function indexController($scope, $http) {
  
  $scope.bios = [
    {
      name: "Malachi Danielewicz",
      bioText: "Bio Text here",
      githubLink: "https://github.com/mddanielewicz",
      githubUsername: "mddanielewicz"
      
    },
    {
      name: "Matthew Thompson",
      bioText: "Bio Text here",
      githubLink: "Github link",
      githubUsername: "username placeholder"
    },
    {
      name: "Michele Morison",
      bioText: "Bio Text here",
      githubLink: "githib link",
      githubUsername: "username placeholder"
    },
    {
      name: "Ryan Bray-Walker",
      bioText: "Bio Text here",
      githubLink: "https://github.com/Ozumii",
      githubUsername: "Ozumii"
    }
  ];
});