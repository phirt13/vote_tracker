'use strict';

$(function() {

    window.BattleRoyale = function() {
        var kittyArrObj = [];
        var kittyPictureRight;
        var kittyPictureLeft;
        var kittyNames = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N']
        var Kitty = function(fileName, kittyName) {
            this.fileName = fileName;
            this.kittyName = kittyName;
            this.votes = 1;
        }
        //Then will add this.name to my constructor to assign names to kitties
        //window below shoes how the decleration of window.ultimateKittyList from ajax.js works
        ultimateKittyList = window.ultimateKittyList;
        ultimateKittyList.forEach(function(item) {
        kittyArrObj.push(new Kitty(item));


            });

        var randomKitty = function() {
             kittyPictureRight = Math.floor(Math.random() * ultimateKittyList.length);
             kittyPictureLeft = Math.floor(Math.random() * ultimateKittyList.length);
                while (kittyPictureRight === kittyPictureLeft) {
                kittyPictureLeft = Math.floor(Math.random() * ultimateKittyList.length);
                }
            var kittyImage1 = $('#contestant-1');
            kittyImage1.attr('src', kittyArrObj[kittyPictureRight].fileName);
            var kittyImage2 = $('#contestant-2');
            kittyImage2.attr('src', kittyArrObj[kittyPictureLeft].fileName);
        };
        randomKitty();
        //This randomKitty() replaces the renders with a random array number that is generated above in kittyPictureRight etc...
        // console.log(kittyArrObj[kittyPictureRight].fileName);
        // console.log(kittyArrObj[kittyPictureLeft].fileName);


        $(function() {
            $('img#contestant-1').on('click', function() {

                var $newButton = $('<button id="next">NEXT ROUND!!!</button>');
                $('canvas#looper').after($newButton);
                kittyArrObj[kittyPictureLeft].votes += 1
                console.log(kittyArrObj[kittyPictureLeft]);
                console.log(kittyArrObj);
                event.preventDefault();
                loopDAloop();
                $('img#contestant-2').fadeToggle();
                $('button#next').on('click', function () {
                    $('img#contestant-2').show();
                    randomKitty();
                    event.preventDefault();
                    console.log(kittyArrObj[kittyPictureLeft])
                    // $('button#next').remove();
                    });
            });

            $('img#contestant-2').on('click', function() {
                var $newButton = $('<button id="next">NEXT ROUND!!!</button>');
                $('canvas#looper').after($newButton);
                kittyArrObj[kittyPictureRight].votes += 1;
                event.preventDefault();
                loopDAloop();
                $('img#contestant-1').fadeToggle();
                $('button#next').on('click', function () {
                    $('img#contestant-1').show();
                    randomKitty();
                    event.preventDefault();
                    $('button#next').remove();

                });
            });
        });
        //jQuery event functions.  Probably a slicker way to do these.  Need to look into function(e) further.

        var looperData = [
            {
                value: kittyArrObj[0].votes,
                color: "#FFA200",
                label: 'kitty1'
            },
            {
                value: kittyArrObj[1].votes,
                color: "#00FF00" //--------------------
            },
            {
                value: kittyArrObj[2].votes,
                color: "#FF0000" //--------------------
            },
            {
                value: kittyArrObj[3].votes,
                color: "#0003FF" //--------------------
            },
            {
                value: kittyArrObj[4].votes,
                color: "#FFFFD7" //--------------------
            },
            {
                value: kittyArrObj[5].votes,
                color: "#FFFF00" //--------------------
            },
            {
                value: kittyArrObj[6].votes,
                color: "#FF00BE" //--------------------
            },
            {
                value: kittyArrObj[7].votes,
                color: "#B2B2B2" //--------------------
            },
            {
                value: kittyArrObj[8].votes,
                color: "#03E3FF" //--------------------
            },
            {
                value: kittyArrObj[9].votes,
                color: "#FF7013" //--------------------Blood Orange
            },
            {
                value: kittyArrObj[10].votes,
                color: "#A4FF5F" //--------------------Grass Green
            },
            {
                value: kittyArrObj[11].votes,
                color: "#7900FF" //--------------------
            },
            {
                value: kittyArrObj[12].votes,
                color: "#00B83E" //--------------------
            },
            {
                value: kittyArrObj[13].votes,
                color: "#FFD159" //--------------------
            }
        ];

        var looperOptions = {
            segmentShowStroke : true,
            showTooltips: true,
            tooltipFillColor: "rgba(0,0,0,0.8)",
            animateScale : true
        }

        var looper = document.getElementById('looper').getContext("2d");
        var kittyLooper = new Chart(looper).Doughnut(looperData, looperOptions);

        var loopDAloop = function (){
            kittyLooper.segments[0].value = kittyArrObj[0].votes;
            kittyLooper.segments[1].value = kittyArrObj[1].votes;
            kittyLooper.segments[2].value = kittyArrObj[2].votes;
            kittyLooper.segments[3].value = kittyArrObj[3].votes;
            kittyLooper.segments[4].value = kittyArrObj[4].votes;
            kittyLooper.segments[5].value = kittyArrObj[5].votes;
            kittyLooper.segments[6].value = kittyArrObj[6].votes;
            kittyLooper.segments[7].value = kittyArrObj[7].votes;
            kittyLooper.segments[8].value = kittyArrObj[8].votes;
            kittyLooper.segments[9].value = kittyArrObj[9].votes;
            kittyLooper.segments[10].value = kittyArrObj[10].votes;
            kittyLooper.segments[11].value = kittyArrObj[11].votes;
            kittyLooper.segments[12].value = kittyArrObj[12].votes;
            kittyLooper.segments[13].value = kittyArrObj[13].votes;
            kittyLooper.update();
        }
    };
});
