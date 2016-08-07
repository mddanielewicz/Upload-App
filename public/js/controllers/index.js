'use strict'

angular.module('uploadApp')
.controller('indexCtrl', function($scope) {
  $scope.bios = [
     {
      "name": "Malachi Danielewicz",
      "text": "Bio Text here",
      "githubLink": "https://github.com/mddanielewicz",
      "githubUsername": "mddanielewicz"
      
    },
    {
      name: "Matthew Thompson",
      text: "Bio Text here",
      githubLink: "Github link Placeholder",
      githubUsername: "username placeholder"
    },
    {
      name: "Michele Morison",
      text: "Bio Text here",
      githubLink: "Github link Placeholder",
      githubUsername: "username placeholder"
    },
    {
      name: "Ryan Bray-Walker",
      text: "Bio Text here",
      githubLink: "https://github.com/Ozumii",
      githubUsername: "Ozumii"
    }
  ];
});