var NumbersApp = angular.module('NumbersApp', ['ngRoute','ngResource','ui.bootstrap']);

NumbersApp.run([function(){
  console.log('NumbersApp is working...');
}]);

NumbersApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })

}]);