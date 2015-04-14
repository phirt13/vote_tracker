'use strict';

(function() {

var kittyArrRight = [];
var kittyArrLeft = [];
var photoListRight = ['Contestants/01.jpg', 'Contestants/02.jpg', 'Contestants/03.jpg', 'Contestants/04.jpg', 'Contestants/05.jpg', 'Contestants/06.jpg', 'Contestants/07.jpg'];
var photoListLeft = ['Contestants/08.jpg', 'Contestants/09.jpg', 'Contestants/10.jpg', 'Contestants/11.jpg', 'Contestants/12.jpg', 'Contestants/13.jpg', 'Contestants/14.jpg'];
var kittyPictureRight;
var kittyPictureLeft;
var kitty2 = document.getElementById('contestant-1');
var kitty1 = document.getElementById('contestant-2');
var next = document.getElementById('next');

var Kitty = function(fileName) {
    this.fileName = fileName;
    this.votes = 1;
}

Kitty.prototype.renderLeft = function() {
    kitty2.src = this.fileName;
}

Kitty.prototype.renderRight = function() {
    kitty1.src = this.fileName;
}

photoListRight.forEach(function(item) {
    kittyArrRight.push(new Kitty(item));
});
photoListLeft.forEach(function(item) {
    kittyArrLeft.push(new Kitty(item));
});

kittyPictureRight = kittyArrRight[Math.floor(Math.random() * kittyArrRight.length)];
kittyPictureRight.renderRight();
kittyPictureLeft = kittyArrLeft[Math.floor(Math.random() * kittyArrLeft.length)];
kittyPictureLeft.renderLeft();


var kittyRightClick = function(event) {
    kittyPictureRight.votes += 1;
    // console.log(kittyPictureRight);
    // console.log(kittyArrRight[0].votes);
    // console.log(kittyArrRight[1].votes);
    // console.log(kittyArrRight[2].votes);
    // console.log(kittyArrRight[3].votes);
    // console.log(kittyArrRight[4].votes);
    // console.log(kittyArrRight[5].votes);
    // console.log(kittyArrRight[6].votes);
    event.preventDefault();
    loopDAloop();
    }


var kittyLeftClick = function(event) {
    kittyPictureLeft.votes += 1
    // console.log(kittyPictureLeft);
    // console.log(kittyArrLeft[0].votes)
    // console.log(kittyArrLeft[1].votes)
    // console.log(kittyArrLeft[2].votes)
    // console.log(kittyArrLeft[3].votes)
    // console.log(kittyArrLeft[4].votes)
    // console.log(kittyArrLeft[5].votes)
    // console.log(kittyArrLeft[6].votes)
    event.preventDefault();
    loopDAloop();
}
var nextKitties = function(event) {
    kittyPictureRight = kittyArrRight[Math.floor(Math.random() * kittyArrRight.length)];
    kittyPictureRight.renderRight();
    kittyPictureLeft = kittyArrLeft[Math.floor(Math.random() * kittyArrLeft.length)];
    kittyPictureLeft.renderLeft();
    event.preventDefault();

}

kitty1.addEventListener('click', kittyRightClick);
kitty2.addEventListener('click', kittyLeftClick);
next.addEventListener('click', nextKitties);

var looperData = [
    {
        value: kittyArrLeft[0].votes,
        color: "#FFA200" //--------------------
    },
    {
        value: kittyArrLeft[1].votes,
        color: "#00FF00" //--------------------
    },
    {
        value: kittyArrLeft[2].votes,
        color: "#FF0000" //--------------------
    },
    {
        value: kittyArrLeft[3].votes,
        color: "#0003FF" //--------------------
    },
    {
        value: kittyArrLeft[4].votes,
        color: "#FFFFD7" //--------------------
    },
    {
        value: kittyArrLeft[5].votes,
        color: "#FFFF00" //--------------------
    },
    {
        value: kittyArrLeft[6].votes,
        color: "#FF00BE" //--------------------
    },
    {
        value: kittyArrRight[0].votes,
        color: "#B2B2B2" //--------------------
    },
    {
        value: kittyArrRight[1].votes,
        color: "#03E3FF" //--------------------
    },
    {
        value: kittyArrRight[2].votes,
        color: "#FF7013" //--------------------Blood Orange
    },
    {
        value: kittyArrRight[3].votes,
        color: "#A4FF5F" //--------------------Grass Green
    },
    {
        value: kittyArrRight[4].votes,
        color: "#7900FF" //--------------------
    },
    {
        value: kittyArrRight[5].votes,
        color: "#00B83E" //--------------------
    },
    {
        value: kittyArrRight[6].votes,
        color: "#FFD159" //--------------------
    }
];

var looperOptions = {
    segmentShowStroke : true,
    animateScale : true
}
var looper = document.getElementById('looper').getContext("2d");
var kittyLooper = new Chart(looper).Doughnut(looperData, looperOptions);

var loopDAloop = function (){
kittyLooper.segments[0].value = kittyArrLeft[0].votes;
kittyLooper.segments[1].value = kittyArrLeft[1].votes;
kittyLooper.segments[2].value = kittyArrLeft[2].votes;
kittyLooper.segments[3].value = kittyArrLeft[3].votes;
kittyLooper.segments[4].value = kittyArrLeft[4].votes;
kittyLooper.segments[5].value = kittyArrLeft[5].votes;
kittyLooper.segments[6].value = kittyArrLeft[6].votes;
kittyLooper.segments[7].value = kittyArrRight[0].votes;
kittyLooper.segments[8].value = kittyArrRight[1].votes;
kittyLooper.segments[9].value = kittyArrRight[2].votes;
kittyLooper.segments[10].value = kittyArrRight[3].votes;
kittyLooper.segments[11].value = kittyArrRight[4].votes;
kittyLooper.segments[12].value = kittyArrRight[5].votes;
kittyLooper.segments[13].value = kittyArrRight[6].votes;
kittyLooper.update();
}

})();
