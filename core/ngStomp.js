import angular from 'angular';
import Stomp from 'stompjs';
import ngstompProvider from './provider';

export default angular
    .module('AngularStompDK', [])
    .provider('ngstomp', ngstompProvider)
    .constant('Stomp', Stomp);