document.addEventListener('deviceready', function () {
   //
}, false);

var app = angular.module('Mramdeen', ['ngRoute']);

app.config(['$routeProvider' ,function ($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/quran', {templateUrl: 'partials/quran.html'})
        .when('/times', {templateUrl: 'partials/times.html'})
        .when('/tv', {templateUrl: 'partials/tv.html'})
        .when('/about', {templateUrl: 'partials/about.html'})
        .otherwise({redirectTo: '/home'});

}]);

app.controller('navController', function () {
    this.menu = 'home';
});