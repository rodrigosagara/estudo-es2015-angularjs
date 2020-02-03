//imposts necessarios
import 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-animate';
import 'angularjs-toaster';
import 'jquery';
import 'popper.js';
import 'bootstrap';

//modulo principal
const App = angular.module('App', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'toaster'
]).config(($routeProvider) => {
    $routeProvider.when('/', {
        template: '<app-root></app-root>'
    });
});

export { App }