 
var health = 0;
var magic = 0;
$( ".gameDiv").hide();


document.getElementById("warrior-button").disabled = true;
document.getElementById("wizard-button").disabled = true;
document.getElementById("thief-button").disabled = true;
document.getElementById("bard-button").disabled = true;
document.getElementById("healer-button").disabled = true;
document.getElementById("dragon-button").disabled = true;

		// Determine Character Abilities
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
     
    $scope.Ability = function() {
        $scope.strength = randomNumber();
        $scope.intelligence = randomNumber();
        $scope.wisdom = randomNumber();
        $scope.dexterity = randomNumber();
        $scope.charisma = randomNumber();
        $scope.constitution = randomNumber();


        s = $scope.strength;
        i = $scope.intelligence;
        w = $scope.wisdom;
        d = $scope.dexterity;
        c = $scope.charisma;
        co = $scope.constitution;

        var newAbilities = [s, i, w, d, c, co]
        console.log("hey this is the new ability" + newAbilities);
		 

		// Determine which characters are playable
		if ($scope.strength <12){

			document.getElementById("warrior-button").disabled = true;
		}
		else {
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

		if ($scope.charisma < 12 || $scope.wisdom < 12) {
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
    	console.log("look e here");
    	return newAbilities;
}
         
});

function randomNumber()  {
	num = Math.floor((Math.random() * 13) + 5);
	return num;
}

function playWarrior () {
	$( ".wiz1" ).remove();
	$( ".thief1" ).remove();
	$( ".bard1" ).remove();
	$( ".healer1" ).remove();
	$( ".dragonKnight1" ).remove();
	$( ".mainDiv").remove();
	health = 400;
	magic = 0;
	experience = 0;
	playGame();

	 

}

function playWizard () {
$( ".thief1" ).remove();
	$( ".bard1" ).remove();
	$( ".healer1" ).remove();
	$( ".dragonKnight1" ).remove();
	$( ".war1").remove();
	$( ".mainDiv").remove();
	playGame();
	 
}

function playBard () {
$( ".thief1" ).remove();
	 
	$( ".healer1" ).remove();
	$( ".dragonKnight1" ).remove();
	$( ".war1").remove();
	$( ".wiz1" ).remove();
}

function playHealer() {
$( ".thief1" ).remove();
	$( ".bard1" ).remove();
	 
	$( ".dragonKnight1" ).remove();
	$( ".war1").remove();
	$( ".wiz1" ).remove();
}

function playThief () {
 
	$( ".bard1" ).remove();
	$( ".healer1" ).remove();
	$( ".dragonKnight1" ).remove();
	$( ".war1").remove();
	$( ".wiz1" ).remove();
}

function playKnight () {
$( ".thief1" ).remove();
	$( ".bard1" ).remove();
	$( ".healer1" ).remove();
	 
	$( ".war1").remove();
	$( ".wiz1" ).remove();
}

function playGame() {
	$(".gameDiv").show();
	var strength = s;
	var intelligence = i;
	var wisdom = w;
	var dexterity = d;
	var constituton = co;
	var charisma = c;
	console.log(strength);
	document.getElementById("strDiv").innerHTML = "Strength: " + strength + "  "
	document.getElementById("intDiv").innerHTML = "Intelligence: " + intelligence  + "  "
	document.getElementById("wisDiv").innerHTML = "Wisdom: " + wisdom + "  "
	document.getElementById("dexDiv").innerHTML = "Dexterity: " + dexterity + "  "
	document.getElementById("conDiv").innerHTML = "Constitution: " + constituton + "  "
	document.getElementById("chrDiv").innerHTML = "Charisma: " + charisma + "  "
 	document.getElementById("healthDiv").innerHTML = "Health points: " + health + "  "
    document.getElementById("magicDiv").innerHTML = "Magic Power: " + magic + "  "
    document.getElementById("expDiv").innerHTML = "Experience Points: " + experience + "  " 

}

 

	 

/*function Ability() {
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
}*/

 

