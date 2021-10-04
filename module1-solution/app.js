(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
    if ($scope.menu === "") {
      $scope.message = "Please enter data first";
      return;
    }

    var numberOfItems = $scope.menu.split(",").length;
    if (numberOfItems <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  $scope.showMessage = function () {
    return $scope.message;
  };
}

})();
