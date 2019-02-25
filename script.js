var myapp = angular.module("myapp", ['ngRoute']);
myapp.controller("HelloController", function($scope,$http,$window) {
$scope.isVisisble=true;
$scope.isCreate=false;
$http.get('http://5c5a21f9af3ff700140de477.mockapi.io/api/email').
    then(function (result) {
        $scope.Emails = result.data;
    }).
    catch(function (error) {
        console.llog(error);
    });
$scope.getReq = function(x) {
	$scope.isVisisble=false;
  $http.get('https://5c5a21f9af3ff700140de477.mockapi.io/api/email/'+x).
    then(function (result) {
        $scope.Email = result.data;
    }).
    catch(function (error) {
        console.llog(error);
    });
};
$scope.showHide = function(x) {
	if (x==2){
		$scope.isCreate=true
	}
	else{
		$scope.isCreate=false
	}
	
};

});
