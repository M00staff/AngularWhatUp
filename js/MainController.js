// linking title with the $scope service and injecting it into the controller
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "Weather Bitches";
}])
