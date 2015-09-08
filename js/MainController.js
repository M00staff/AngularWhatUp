// linking title with the $scope service and injecting it into the controller
app.controller('MainController', ['$scope', function($scope) {

  //$scope links to this variable and allows us to use title in the index.html
  $scope.title = "Weather Bitches";
}])
