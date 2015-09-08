//dependency injection for AJAX calls
app.controller('WeatherController', ['$http', '$scope', function($http, $scope) {


  //get request
  $http.get('http://api.wunderground.com/api/9a5c4fd309b43a2a/conditions/q/VA/Vienna.json', {apikey: '9a5c4fd309b43a2a'})
  .success(function(data) {
    console.log("success with AJAX request");
    $scope.stuff = data;
  })
  .error(function(data) {
    console.log("error with AJAX request");
  });
} ]);
