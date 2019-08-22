import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import './css/styles.css';
import {HomeController, ExperienceController, ContactController, PortfolioController, NotFoundController} from './controllers/controllers';
import {TestController} from './controllers/test-controller';
import {ContactService} from './services/services';


angular.module('myWebsite', [uirouter])
.service('ContactService', ContactService)
.controller('HomeController', HomeController)
.controller('ContactController', ContactController)
.controller('PortfolioController', PortfolioController)
.controller('ExperienceController', ExperienceController)
.controller('TestController', TestController)
.controller('NotFoundController', NotFoundController)
.config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'./views/home.html',
      controller: HomeController,
      controllerAs: 'Hcontroller',
    })
    .state('experience', {
      url: '/experience',
      templateUrl:'./views/myExperience.html',
      controller: ExperienceController,
      controllerAs: 'Econtroller',
    })
    .state('contact', {
      url: '/contact',
      templateUrl:'./views/contact.html',
      controller: ContactController,
      controllerAs: 'Ccontroller',
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl:'./views/portfolio.html',
      controller: PortfolioController,
      controllerAs: 'Pcontroller',
    })
    .state('test', {
      url: '/test',
      templateUrl:'./views/test.html',
      controller: TestController,
      controllerAs: 'Tcontroller',
    })
    .state('notFound', {
      url: '/notFound',
      templateUrl:'./views/notFound.html',
      controller: NotFoundController,
      controllerAs: 'NFcontroller',
    });
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);

}
