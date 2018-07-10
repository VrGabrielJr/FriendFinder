var friendsData = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        var newFriendScores = req.body.scores;
        var scoresArr = [];
        var match = 0;

    for(var i=0; i<friendsData.length; i++){
      var scoresDiff = 0;

      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      scoresArr.push(scoresDiff);
    }


    for(var i=0; i<scoresArr.length; i++){
      if(scoresArr[i] <= scoresArr[match]){
        match = i;
      }
    }

    var bestMatch = friendsData[match];
    res.json(bestMatch);

    friendsData.push(req.body);
    });
};