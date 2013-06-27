define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Idea = Model.extend({

    defaults: {
      pitch: getPitch(),
      product: getProduct(),
      target: getTarget()
    }
  });

  // oh man, I really shouldn't remake all these arrays every time
  // the page is reloaded, should I? How could I improve this?

  function getPitch () {

    var pitchArray = new Array(
        "Picture this.",
        "I've got it.",
        "Think about this for a second.",
        "Imagine, if you will:",
        "This could get huge."
    );
    var randomIndex = Math.floor(Math.random()*(pitchArray.length));
    return pitchArray[randomIndex];
  };

  function getProduct () {

    var productArray = new Array(
        "a Facebook",
        "a Twitter",
        "a Myspace",
        "a LinkedIn",
        "a Tumblr",
        "an OkCupid",
        "a Pinterest",
        "an Instagram",
        "a Flickr",
        "a Github",
        "a Kickstarter",
        "a Foursquare",
        "a Geocities",
        "a Quora",
        "a Yahoo Answers",
        "an eHow",
        "an Instructables",
        "a Reddit",
        "a Wikipedia",
        "an Urban Dictionary",
        "a Yelp",
        "an Omegle",
        "a ChatRoulette",
        "a Stack Overflow",
        "a Youtube",
        "a Netflix",
        "a Vimeo",
        "a Pandora",
        "a Spotify",
        "a SoundCloud",
        "TED Talks",
        "a Khan Academy",
        "a StumbleUpon",
        "a Vine",
        "a Dropbox",
        "a Wolfram|Alpha",
        "a Mapquest",
        "a Google"

    );
    var randomIndex = Math.floor(Math.random()*(productArray.length));
    return productArray[randomIndex];
  };

  function getTarget () {

    var targetArray = new Array(
        "knock-knock jokes",
        "top-10 lists",
        "animated PNGs",
        "digital art",
        "fanfiction",
        "trivia",
        "foreign exchange students",
        "the 22nd century",
        "baby boomers",
        "Generation X",
        "casual gamers",
        "soccer moms",
        "tweens",
        "scientists",
        "outdoors enthusiasts",
        "bowling leagues",
        "stamp collectors",
        "terrarium enthusiasts",
        "creature FX hobbyists",
        "boring people",
        "people who fancy themselves random",
        "airports",
        "baristas",
        "dragons",
        "collectibles",
        "craft brews",
        "socks",
        "knitting",
        "livestock",
        "pho",
        "rodents",
        "adhesives",
        "glowsticks"
    );
    var randomIndex = Math.floor(Math.random()*(targetArray.length));
    return targetArray[randomIndex];
  };

  return Idea;
});
