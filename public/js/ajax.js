'use strict';

$(function() {

  //TODO implement local storage later
  // (function localStorageCheck() {
  //   if (localStorage.getItem('gladiators') {
  //     battleRoyale
  //   })
  // })


  var kittyPics = [];

  runAjax();

  function runAjax() {

    $.ajax({
      type: 'GET',
      url: 'https://api.imgur.com/3/album/gCkFl',
      headers: {
        'Authorization': 'Client-ID 5ba25746768cd86'
      },
      success: (res) => {
        var images = res.data.images;

        for (var i = 0; i < images.length; i++) {
          kittyPics.push(images[i]);
        }
        console.log(kittyPics);
        return kittyPics;
      },
      error: (err) => {

        console.log(err);

      },
      complete: () => {

        battleRoyale(kittyPics);

      }
    });
  }

  function battleRoyale(array) {

  var Kitty = function(fileName) {
    this.fileName = fileName;
    this.votes = 0;
  };

  var gladiators = [];

  function makeContestants(rawImages, contestants) {
      for (var i = 0; i < rawImages.length; i++) {
        contestants.push( new Kitty(rawImages[i].link));
      }
      return contestants;
  }

  makeContestants(array, gladiators);

  console.log(gladiators);

  function selectGladiators() {

    var rightPic;
    var leftPic;

    function getRandom() {
      rightPic = Math.floor(Math.random() * gladiators.length);
      leftPic = Math.floor(Math.random() * gladiators.length);
    }

    while (rightPic === leftPic) {
      getRandom();
    }

    $gladiatorRight.attr('src', gladiators[rightPic].fileName);
    $gladiatorLeft.attr('src', gladiators[leftPic].fileName);
  }

  selectGladiators();

  function beginTheGames() {


  }
};
});
//   .done(function(res) {
//     console.log(res);
//     images = res.data.images
//     //definitely need this
//     pushKitties(images);
//     BattleRoyale();
//     //this runs the whole choice game itself.  Pretty wild that it has to work this way
//   })
//   //It seems that when .done drops the program is DONE.
//   //So everything that you need to run needs to be included in the .done function.
//   //In general, need to understand AJAX and JSON better.
//   .fail(function(err) {
//     console.log(err);
//   });
// });
