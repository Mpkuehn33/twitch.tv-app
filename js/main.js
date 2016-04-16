var feeds = ["TrumpSC", "TeamSp00ky", "TwitchPlaysPokemon", "Widgitybear", "AriaBlarg", "TheMexicanRunner", "OPNerd", "rabbitbong", "MedryBW", "FreeCodeCamp", "C9Sneaky", "GoldGlove", "nl_Kripp"];

$(document).ready(function() {
  feeds.forEach(function(feedName) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + feedName + '?callback=?', function(data) {
            var name = feedName; 
            var streaming = data.stream;
            var url = "https://www.twitch.tv/" + feedName;
        
        $.getJSON('https://api.twitch.tv/kraken/channels/' + feedName + '?callback=?', function(data) {
            var logo = data.logo;
            var status = data.status.substr(0, 40) + "..."
            if(streaming === null){
                $("#feeds").append("<div class='feed oflDiv'> <img class='feedImg' src='" + logo + "'><div class='bigWrap'> <div class='wrap'><div class='offline'></div> <a href='http://www.twitch.tv/" + name + "'><p class='titles'>" + name + "</p></a><p class='game'>" + data.game + "</div><p class='status'>" + status + "</p></div></div>");
                $('.feed').fadeIn(1500).css("display", "block");
            }             
            else{
           $("#feeds").append("<div class='feed onlDiv'> <img class='feedImg' src='" + logo + "'><div class='bigWrap'><div class='wrap'><div class='online'></div><a href='http://www.twitch.tv/" + name + "'><p       class='titles'>" + name + "</p></a><p class='game'>" + data.game + "</div> <p class='status'>" + status + "</p></div></div>");
                $('.feed').fadeIn(1500).css("display", "block");
            }
        });
    });
  });
    //Make sure thumbnails look ok
    setTimeout(function(){
        $('.feedImg').each( function() {
            var x = $(this).prop('src');
            if(x.substr(x.length - 4) === "null"){
                $(this).attr("src", "http://dummyimage.com/50x50/000/ffffff&text=oops,+no+image!");
            }
        });
    }, 3000);
});

var onlineOnly = function(){
    $('.onlDiv').fadeIn(1500).css("display", "block");
    $('.oflDiv').fadeOut(1500).css("display", "none");
}

var offlineOnly = function(){
    $('.onlDiv').fadeOut(1500).css("display", "none");
    $('.oflDiv').fadeIn(1500).css("display", "block");
}

var displayBoth = function(){
    $('.onlDiv').fadeIn(1500).css("display", "block");
    $('.oflDiv').fadeIn(1500).css("display", "block");
}




