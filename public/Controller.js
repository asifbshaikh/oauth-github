var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
	$scope.test= "aaaaaaaaaaaaaaa";
	$scope.loadRepo = function () {
		console.log("===============");
		$http.get("/user/repos").then(
			function(response) {
				console.log("++++++++++++++",response);
				$scope.data = response.data.name;
				console.log("-------------",$scope.data);
				for (var i = 0; i < $scope.data.length; i++) {
					$scope.name = $scope.data[i].name;
					console.log("name = ",$scope.name);	
				}
			},
			function(error) {
				console.log(error);
			}
		);	
	}
	
});