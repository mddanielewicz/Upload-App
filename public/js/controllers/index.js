'use strict'

angular.module('uploadApp')
.controller('indexCtrl', function($scope) {
 $scope.projectLang = [
   {
     name: 'MongoDB',
     url: 'https://docs.mongodb.com/manual/'
   },{
     name: 'ExpressJS',
     url: 'https://expressjs.com/'
   },{
     name: 'AngularJS',
     url: 'https://angularjs.org/'
   },{
     name: 'NodeJS',
     url: 'https://nodejs.org/en/'
   },{
     name: 'GridFS',
     url: 'https://docs.mongodb.com/manual/core/gridfs/'
   }
 ];
  
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