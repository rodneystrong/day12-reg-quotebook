angular
  .module('quoteBook')
  .controller('MainCtrl', function($scope, dataService) {

    $scope.thisAppIsBroken = "this app works biiitch";

    $scope.quotes = dataService.getData();

    $scope.removeData = function(textToDelete) {
      dataService.removeData(textToDelete);
      // localStorage.removeItem('newQuoteData', newQuote);
    }

    //create a function that uses the addData function from dataService
    //you need to create var for the quote and author inputs
    $scope.addData = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newAuthor
      }
      dataService.addData(newQuote);

      //adds item to local storage
      localStorage.setItem('newQuoteData', newQuote);
      console.log(localStorage.getItem('newQuoteData'));
      //when i comment the section below, it still works.. why?
      //this part clears the input fields
      if (newQuote.text) {
            $scope.newQuoteText = '';
            $scope.newAuthor = '';
      };
    }

    //clears localStorage
    $scope.removeAllLocalStorage = function() {
      dataService.removeAllLocalStorage();
    }

  });
