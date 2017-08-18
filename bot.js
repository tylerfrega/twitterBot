var twit = require('twit');  
var config = require('./config.js');

var Twitter = new twit(config);


var retweet = function() {  
    var params = {
      q: '#nodejs, #Nodejs',
      result_type: 'recent',
      lang: 'en'    
    }
    
    Twitter.get('search/tweets', params, function(err, data) {
        // if there no errors
          if (!err) {
            // grab ID of tweet to retweet
            console.log(data);
              var retweetId = data.statuses[0].id_str;
              // Tell TWITTER to retweet
              Twitter.post('statuses/retweet/:id', {
                  id: retweetId
              }, function(err, response) {
                  if (response) {
                      console.log('Retweeted!!!');
                  }
                  // if there was an error while tweeting
                  if (err) {
                      console.log('Something went wrong while RETWEETING... Duplication maybe...');
                  }
              });
          }
          // if unable to Search a tweet
          else {
            console.log(err, 'Something went wrong while SEARCHING...');
          }
      });
  }
  

  