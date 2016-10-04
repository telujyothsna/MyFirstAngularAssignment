(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {
  $scope.inputText = '';
  $scope.class = '';
  $scope.getStrCount = function() {
    var inputText_length;
    var inputElements;
    if($scope.inputText !== ''){
      $scope.class = "green";
      inputElements = $scope.inputText.split(",").filter(function(item){
        return item.trim() !== '';
      });
      inputText_length = inputElements.length;
      if ((inputText_length > 0) && (inputText_length <= 3)) {
        $scope.msg = "Enjoy!";
      } else if (inputText_length > 3) {
        $scope.msg = "Too much!";
      }
    } else {
      $scope.msg = "Please enter data first";
      $scope.class = "red";
    }

    if(inputText_length == 0) {
      $scope.msg = "Please enter valid data";
      $scope.class = "red";
    }
  };

  $scope.clearMsg = function() {
    if($scope.inputText == '') {
      $scope.msg = "";
      $scope.class= "";
    }
  };
}

})();
