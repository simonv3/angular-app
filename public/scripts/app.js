
var app = angular.module('app',[
  'ngRoute',
  'app.controllers',
]);


app.config(['$routeProvider',
function($routeProvider) {
  console.log('conf');
  $routeProvider.
    when('/', {
      templateUrl: '/public/partials/index.html',
      controller: 'appCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);