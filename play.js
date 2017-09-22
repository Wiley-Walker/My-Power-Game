
   console.log("at the play.js")

 var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "character.html"
    })
    .when("/london", {
        templateUrl : "character.html"
    })
    .when("/paris", {
        templateUrl : "index.html"
    });
});

console.log("click");