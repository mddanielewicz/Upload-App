
//Define the UploadApp module
var uploadApp = angular.module('uploadApp', []).config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});