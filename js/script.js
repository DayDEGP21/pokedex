var Poke = angular.module("Poke",[])
Poke.controller("LisPoke",function($scope,$rootScope,$http){
	$scope.Lis = [];
	for(var y=1;y<=100;y++){
		$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/"+y
	}).then(function pokedex(x){
		$scope.Lis.push(x);
	});
	}
	
});