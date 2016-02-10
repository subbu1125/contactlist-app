var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
  console.log("hello world from controller");

  $http.get('/contactlist').then(function(response){
    console.log("i got the data i requestd ");
    $scope.contactlist=response.data;
  });

}]);
