angular
  .module('quoteBook')
  .controller('MainCtrl', function($scope, dataService) {

    $scope.thisAppIsBroken = "this app works biiitch";

    $scope.quotes = dataService.getData();

    $scope.removeData = function(textToDelete) {
      dataService.removeData(textToDelete);
    }

    //create a function that uses the addData function from dataService
    //you need to create var for the quote and author inputs
    $scope.addData = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newAuthor
      }
      dataService.addData(newQuote);
      //when i comment the section below, it still works.. why?
      if (dataService.addData(newQuote)) {
            $scope.newQuoteText = '';
            $scope.newAuthor = '';
      };
    }

  });
