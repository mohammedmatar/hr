angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.vacations', {
      url: '/vacations',
      views: {
        'tab1': {
          templateUrl: 'templates/vacations.html',
          controller: 'vacationsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.advances', {
      url: '/advances',
      views: {
        'tab2': {
          templateUrl: 'templates/advances.html',
          controller: 'advancesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.salaryCertificate', {
      url: '/salary-cert',
      views: {
        'tab3': {
          templateUrl: 'templates/salaryCertificate.html',
          controller: 'salaryCertificateCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/company-login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('embloyeeLogin', {
      url: '/page10',
      templateUrl: 'templates/embloyeeLogin.html',
      controller: 'embloyeeLoginCtrl'
    })
        
      
    
      
        
    .state('sample', {
      url: '/sample',
      templateUrl: 'templates/sample.html',
      controller: 'sampleCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/company-login');

});