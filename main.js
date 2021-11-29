var app = angular.module('app' , []);


app.controller ('ProviderCtrl' , ["$scope", function ($scope) {
	$scope.name = "Provider";
	
}]);


app.controller ('FactoryCtrl' , ["$scope", function ($scope) {
	$scope.name = "Factory";
	
}]);



app.controller ('ServiceCtrl' , ["$scope", function ($scope) {
	$scope.name = "Service";
	
}]);
