var feeds = ["Towellie", "TrumpSC", "TeamSp00ky", "TwitchPlaysPokemon", "Widgitybear", "AriaBlarg", "TheMexicanRunner", "OPNerd", "rabbitbong", "Wingsofdeath", "MedryBW"];

$(document).ready(function() {
  feeds.forEach(function(feedName) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + feedName + '?callback=?', function(data) {
        console.log(data.logo);
      if (data.stream === null) {
        $('#feeds').append("<p>" + feedName + " is offline </p>");
      } else {
        $('#feeds').append("<p>" + feedName + " is streaming " + (data.stream.game) + "/<p>");
      }
    });

  });
    
    /*
    
  feeds.forEach(function(feedName) {
    $.getJSON('https://api.twitch.tv/kraken/channels/' + feedName + '?callback=?', function(data) {
        console.log(data.logo);
        console.log(data.status);
    });

  });
    
    
    
    
    */
    
    
})



