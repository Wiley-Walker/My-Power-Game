var strength = 0;
var intelligence = 0;
var wisdom = 0;
var dexterity = 0;
var charisma = 0;
var constitution = 0;
var health = 0;
var magic = 0;

		// Determine Character Abilities
var app = angular.module('thisApp', []);
app.controller('myCtrl', function($scope) {
     
    $scope.Ability = function() {
        $scope.strength = randomNumber();
        $scope.intelligence = randomNumber();
        $scope.wisdom = randomNumber();
        $scope.dexterity = randomNumber();
        $scope.charisma = randomNumber();
        $scope.constitution = randomNumber();
		 

		// Determine which characters are playable

		if ($scope.strength < 12) {
			  
			 document.getElementById("warrior-button").disabled = true;
		}
		else{
			 
			document.getElementById("warrior-button").disabled = false;
		}

		if ($scope.intelligence <12){

			document.getElementById("wizard-button").disabled = true;
		}
		else {
			document.getElementById("wizard-button").disabled = false;
		}

		if ($scope.dexterity <12) {
			document.getElementById("thief-button").disabled = true;
		}
		else {
			document.getElementById("thief-button").disabled = false;
		}

		if ($scope.charisma && $scope.wisdom < 12) {
			document.getElementById("bard-button").disabled = true;
		}
		else {
			document.getElementById("bard-button").disabled = false;
		}

    	
    	if ($scope.constituton < 12 || $scope.intelligence < 12) {
    		document.getElementById("healer-button").disabled = true;
    	}
    	else {
    		document.getElementById("healer-button").disabled = false;
    	}
    	if ($scope.strength < 13 || $scope.constituton < 13 || $scope.wisdom < 13) {
    		document.getElementById("dragon-button").disabled = true;
    	}
    	else {
    		document.getElementById("dragon-button").disabled = false;
    	}
}
         
});

function randomNumber()  {
	num = Math.floor((Math.random() * 13) + 5);
	return num;
}

 

	 

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
console.log("strength = " + strength);
}

 

