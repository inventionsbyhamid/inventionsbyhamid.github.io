'use strict';

var app = angular
  .module('passhojaoApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://passhojao.firebaseio.com')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/main', {
        templateUrl: 'views/main.html'        
      })
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/schools', {
        templateUrl: 'views/school.html'        
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
     .when('/register', {
        templateUrl: 'views/register.html',
        controller:'AuthController'
      })
      .when('/colleges', {
        templateUrl: 'views/college.html'        
      })
      .when('/submit', {
        templateUrl: 'views/submit.html'        
      })
      .when('/about', {
        templateUrl: 'views/about.html'        
      })
      .when('/fapsdelhi', {
        templateUrl: 'views/fapsdelhi.html'        
      })
      .when('/amitynoida', {
        templateUrl: 'views/amitynoida.html'        
      })
      .when('/nsit', {
        templateUrl: 'views/nsit.html'        
      })
      .when('/dpsdwarka', {
        templateUrl: 'views/dpsdwarka.html'        
      })
      .when('/dpsrkpuram', {
        templateUrl: 'views/dpsrkpuram.html'        
      })
     .when('/indian', {
        templateUrl: 'views/indian.html'        
      })
     .when('/dtu', {
        templateUrl: 'views/dtu.html'        
      })
     .when('/iitd', {
        templateUrl: 'views/iitdelhi.html'        
      })
     .when('/aiactr', {
        templateUrl: 'views/aiactr.html'        
      })
     .when('/jmi', {
        templateUrl: 'views/jmi.html'        
      })
      .when('/mait', {
        templateUrl: 'views/mait.html'        
      })
    

      .otherwise({
        redirectTo: '/'
      });
  });
