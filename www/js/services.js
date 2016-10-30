angular
    .module('starter.services', [])
    .factory('Cards', function () {
        var cards = [{
                value: '0',
                card: 'img/cards/00.jpg'
            }, {
                value: '1/2',
                card: 'img/cards/01.jpg'
            }, {
                value: '1',
                card: 'img/cards/02.jpg'
            }, {
                value: '2',
                card: 'img/cards/03.jpg'
            }, {
                value: '3',
                card: 'img/cards/04.jpg'
            }, {
                value: '5',
                card: 'img/cards/05.jpg'
            }, {
                value: '8',
                card: 'img/cards/06.jpg'
            }, {
                value: '13',
                card: 'img/cards/07.jpg'
            }, {
                value: '20',
                card: 'img/cards/08.jpg'
            }, {
                value: '40',
                card: 'img/cards/09.jpg'
            }, {
                value: '100',
                card: 'img/cards/10.jpg'
            }, {
                value: '?',
                card: 'img/cards/11.jpg'
            }, {
                value: 'Infinitos',
                card: 'img/cards/12.jpg'
            }];
        var current = 0;

        return {
            all: function() {
                return cards;
            },
            get: function(cardId) {

                if (!cards[cardId]) {
                    return null;
                }

                current = cardId;
                return cards[current];
            },
            next: function() {
                if (current + 1 === cards.length) {
                    current = 0;
                } else {
                    current++;
                }
                return cards[current];
            },
            prev: function() {
                if (0 === current) {
                    current = cards.length - 1;
                } else {
                    current--;
                }
                return cards[current];
            }
        };
    });
