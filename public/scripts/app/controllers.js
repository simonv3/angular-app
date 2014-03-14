var appCtrls = angular.module("app.controllers", []);

appCtrls.controller('appCtrl', ['$scope',
	function ($scope){
		console.log('init')
		$scope.title = "Test"
	}]);

