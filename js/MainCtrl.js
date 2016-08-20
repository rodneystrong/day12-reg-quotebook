angular
  .module('quoteBook')
  .controller('MainCtrl', function($scope, dataService) {
    $scope.text='bitches';

    $scope.getData = function() {
      $scope.quotes = dataService.getData();
    }

    $scope.getData();

    $scope.removeData = function(textToRemove) {
      dataService.removeData(textToRemove);
    }

    $scope.addData = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor
      }
      dataService.addData(newQuote);
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor= '';
    }

    // $scope.removeData = function(textToRemove) {
    //   dataService.removeData(textToRemove);
    // }

  })
