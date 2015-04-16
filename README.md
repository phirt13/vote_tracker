vote_tracker

This is a voting app that tracks the cuteness votes of 14 kitties.

2 kitties are displayed each round and the user is asked to click on the kitty image that they find cutest.

The kitty images are stored on Imuger.  AJAX transfers them.  The url links are extracted and stored into an array.  This array is then filtered through an object constructer and which designates kitties with votes and (eventually names).


To prevent two of the same kitties from being displayed in the same round a random array number is assinged to the rendering functions and this number is checked to be sure that it is not the same number.

Each time a user votes for a kitty a vote is added to the total votes of that kitty.

A graph which displays the amount of total votes for each kitty changes as each kitty acquires more votes.


