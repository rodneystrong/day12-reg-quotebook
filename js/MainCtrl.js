angular
  .module('quotebook')
  .controller('MainCtrl', function($scope, $http, dataService) {
    $scope.thisAppIsBroken = 'This app is working!';

    // $http.get('js/data.json').then(function(data) {
    //   $scope.quotes = data;
    // })

    $scope.quotes = dataService.getQuotes();

    $scope.addQuote = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor
      }
      dataService.addQuote(newQuote);
      //setting input fields to blank after entering quote
      $scope.newQuoteText='';
      $scope.newQuoteAuthor='';
    }

    $scope.removeQuote = function(textToDelete) {
      dataService.removeQuote(textToDelete)
    }

    //setting the intial visibility of the filter inputs to
    //not display
    $scope.showMe = false;

  })
