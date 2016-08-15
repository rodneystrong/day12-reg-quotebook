angular
  .module('quoteBook')
  .controller('MainCtrl', function($scope, dataService) {

    $scope.thisAppIsBroken = "this app works biiitch";

    $scope.quotes = dataService.getData();

    $scope.removeData = function(textToDelete) {
      dataService.removeData(textToDelete);
    }

  });
