'use strict';

$(function() {

  window.ultimateKittyList = [];
  var images;
  var saveToLocalStorage = function(data) {
  localStorage.setItem('ajaxData', JSON.stringify(data));
  };

  var pushKitties = function(images) {
    images.forEach(function(img) {
      window.ultimateKittyList.push(img.link);
      // console.log(window.ultimateKittyList);
    });
  };

  saveToLocalStorage(images);

  $.ajax({
    url: 'https://api.imgur.com/3/album/gCkFl',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 5ba25746768cd86'
    }
  })
  .done(function(res) {
    images = res.data.images
    //definitely need this
    pushKitties(images);
    BattleRoyale();
    //this runs the whole choice game itself.  Pretty wild that it has to work this way
  })
  //It seems that when .done drops the program is DONE.
  //So everything that you need to run needs to be included in the .done function.
  //In general, need to understand AJAX and JSON better.
  .fail(function(err) {
    console.log(err);
  });
});

