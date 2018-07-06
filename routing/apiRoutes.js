module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        var newFriendScores = req.body.scores;
        var scoresArr = [];
        var match = 0;

    //runs through all current friends in list
    for(var i=0; i<friendsData.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArr.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArr.length; i++){
      if(scoresArray[i] <= scoresArray[match]){
        match = i;
      }
    }

    //return bestMatch data
    var bestMatch = friendList[match];
    res.json(bestMatch);

    //pushes new submission into the friendsList array
    friendsData.push(req.body);
    });
};