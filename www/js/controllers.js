angular
        .module('starter.controllers', [])

        .controller('CardsCtrl', function($scope, Cards) {
            $scope.cards = Cards.all();
        })

        .controller('CardDetailCtrl', function($scope, Cards, $stateParams, $ionicSlideBoxDelegate) {
            $scope.cards = Cards.all();
            $scope.options = {
                loop: true,
                effect: 'loop',
                speed: 500
            };
            
            $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
                $scope.value = Cards.get(parseInt($stateParams.card, 10)).value;
                $scope.slider = data.slider;
                $scope.slider.slideTo(parseInt($stateParams.card, 10) + 1);
              
            });
            
            
//            $scope.data = {};
//            $scope.$watch('data.slider', function(nv, ov){
//               $scope.slider = $scope.data.slider; 
//            });
//
//            $timeout(function(){
//                $scope.slider.slide($stateParams.card);
//            }, 1000);


//            console.log($scope.data.slider);
//            $ionicSlideBoxDelegate.slide($stateParams.card);
//            $ionicSlideBoxDelegate.update();            
        })

        .controller('AboutCtrl', function ($scope) {
        });
