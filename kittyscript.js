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
    this.votes = 0;
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
    console.log(kittyPictureRight);
    console.log(kittyArrRight[0].votes);
    console.log(kittyArrRight[1].votes);
    console.log(kittyArrRight[2].votes);
    console.log(kittyArrRight[3].votes);
    console.log(kittyArrRight[4].votes);
    console.log(kittyArrRight[5].votes);
    console.log(kittyArrRight[6].votes);
    event.preventDefault();
    new Chart(countries).Pie(pieData, pieOptions);
    console.log(pieData)
    }


var kittyLeftClick = function(event) {
    kittyPictureLeft.votes += 1
    console.log(kittyPictureLeft);
    console.log(kittyArrLeft[0].votes)
    console.log(kittyArrLeft[1].votes)
    console.log(kittyArrLeft[2].votes)
    console.log(kittyArrLeft[3].votes)
    console.log(kittyArrLeft[4].votes)
    console.log(kittyArrLeft[5].votes)
    console.log(kittyArrLeft[6].votes)
    event.preventDefault();
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

var pieData = [
    {
        value: 20,
        color: "Red"
    },
    {
        value: 20,
        color: "Blue"
    }
];

var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
}
var countries = document.getElementById('countries').getContext("2d");
var looper = new Chart(countries).Pie(pieData, pieOptions);

looper.pieData[1].value = 10;
looper.update()
})();
