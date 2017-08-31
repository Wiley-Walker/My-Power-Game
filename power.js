var strength = 0;
var intelligence = 0;
var wisdom = 0;
var dexterity = 0;
var charisma = 0;
var constitution = 0;
var health = 0;
var magic = 0;

var app = angular.module('thisApp', []);
app.controller('myCtrl', function($scope) {
     
    $scope.Ability = function() {
        $scope.strength = randomNumber();
        $scope.intelligence = randomNumber();
        $scope.wisdom = randomNumber();
        $scope.dexterity = randomNumber();
        $scope.charisma = randomNumber();
        $scope.constitution = randomNumber();
    }
         
});

function randomNumber()  {
	num = Math.floor((Math.random() * 13) + 5);
	return num;
}

	console.log(randomNumber());

function Ability() {
	strength = randomNumber();
	intelligence = randomNumber();
	wisdon = randomNumber();
	dexterity = randomNumber();
	charisma = randomNumber();
	constituton = randomNumber();
	return strength;
	return intelligence;
	return wisdom;
	return dexterity;
	return charisma;
	return constituton; 

}

