angular
  .module('quotebook')
  .controller('MainCtrl', function($scope, $http) {
    $scope.thisAppIsBroken = 'This app is working!';

    $http.get('js/data.json').then(function(data) {
      $scope.quotes = data;
    })

  })
