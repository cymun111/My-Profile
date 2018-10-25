import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import './css/styles.css';
import {HomeController, ContactController, AboutController, NotFoundController} from './controllers/controllers';


angular.module('myWebsite', [uirouter])
.controller('HomeController', HomeController)
.controller('ContactController', ContactController)
.controller('AboutController', AboutController)
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
    .state('contact', {
      url: '/contact',
      templateUrl:'./views/contact.html',
      controller: ContactController,
      controllerAs: 'Ccontroller',
    })
    .state('about', {
      url: '/about',
      templateUrl:'./views/about.html',
      controller: AboutController,
      controllerAs: 'Acontroller',
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
