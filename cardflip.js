var cards = [];

var easy = [
    '<img src="http://placekitten.com/600/600">',
    '<img src="http://placekitten.com/500/500">',
    '<img src="http://placekitten.com/400/400">'
];

var medium = [
    '<img src="http://placekitten.com/600/600">',
    '<img src="http://placekitten.com/500/500">',
    '<img src="http://placekitten.com/400/400">',
    '<img src="http://placekitten.com/300/300">',
    '<img src="http://placekitten.com/1000/1000">',
    '<img src="http://placekitten.com/1100/1100">'
];

var hard = [
    '<img src="http://placekitten.com/600/600">',
    '<img src="http://placekitten.com/500/500">',
    '<img src="http://placekitten.com/400/400">',
    '<img src="http://placekitten.com/300/300">',
    '<img src="http://placekitten.com/1000/1000">',
    '<img src="http://placekitten.com/1100/1100">',
    '<img src="http://placekitten.com/900/900">',
    '<img src="http://placekitten.com/850/850">',
    '<img src="http://placekitten.com/950/950">'
];

var memes = [
    '<img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2012/11/27/17/enhanced-buzz-1486-1354057138-0.jpg">',
    '<img src="http://www.relatably.com/m/img/classic-memes/78184cf2331e538e38d21b25519fa567.jpg">',
    '<img src="http://i.imgur.com/QIorchk.png">'
];




$(document).ready(function(){
    $('.btn').click(function(){
        switch($(this).attr('id')){
            case "easy":
                cards = easy;
                break;
            case "medium":
                cards = medium;
                break;
            case "hard":
                cards = hard;
                break;
            case "memes":
                cards = memes;
                break;
            default:
                break;
        }

        $('.container').addClass('hidden');
        $('.container-fluid').removeClass('hidden');
        make();
    });

    function make(){
        var gridSize = cards.length;
        shuffle(cards);
        console.log(cards);

        var mgHTML = '';

        var card = '';

        for(var i = 0; i < gridSize; i++){
            card = cards[i];

            mgHTML += '<div class="mg-tile col-sm-2">';
            mgHTML +=   '<div class="mg-tile-inner">';
            mgHTML +=       '<div class="mg-front">' + card + '</div>';
            mgHTML +=       '<div class="mg-back"></div>';
            mgHTML +=   '</div>';
            mgHTML += '</div>';

        }

        shuffle(cards);

        for(var i = 0; i < gridSize; i++){
            card = cards[i];

            mgHTML += '<div class="mg-tile col-sm-2">';
            mgHTML +=   '<div class="mg-tile-inner">';
            mgHTML +=       '<div class="mg-front">' + card + '</div>';
            mgHTML +=       '<div class="mg-back"></div>';
            mgHTML +=   '</div>';
            mgHTML += '</div>';

        }

        $('.mg-contents').html(mgHTML);

        $('.mg-tile-inner').click(function(){
            $(this).toggleClass('flipped');
            console.log('clicked');

            var cardsUp = $('.mg-tile-inner.flipped');



            if(cardsUp.length === 2){
                if(cardsUp.find('img')[0].src === cardsUp.find('img')[1].src){
                    console.log("Match!!!!!!");
                    setTimeout(function(){
                        cardsUp.addClass('matched');
                    }, 500);
                }else{
                    console.log("Not match...");


                }

                setTimeout(function(){
                    cardsUp.removeClass('flipped');

                    console.log($('body').find('.matched').length);
                    if($('body').find('.matched').length === cards.length * 2){
                        $('.container-fluid').addClass('hidden');
                        $('.winner').removeClass('hidden');
                        console.log("winner");
                    }
                }, 1000);
            }else if(cardsUp.length === 1){

            }else{

            }


        });
    }
     

});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}