// Ionic Starter App

angular
    .module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.cards', {
                url: '/cards',
                views: {
                    'tab-cards': {
                        templateUrl: 'templates/tab-cards.html',
                        controller: 'CardsCtrl'
                    }
                }
            })
            .state('tab.card-detail', {
                url: '/cards/:card',
                views: {
                    'tab-cards': {
                        templateUrl: 'templates/card-detail.html',
                        controller: 'CardDetailCtrl'
                    }
                }
            })
            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/tab-about.html',
                        controller: 'AboutCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/cards');
    });
