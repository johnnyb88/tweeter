$(document).ready( () => {
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  const renderTweets = function(tweets) {
    const container = $('.tweets-container');
    for (let tweet of tweets) {
      let output = createTweetElement(tweet);
      container.append(output);
    }
  };

  const createTweetElement = function(tweet) {
    return ` <article>
  <header class="tweetHeader"><img class= "profile" src="${tweet.user.avatars}"><h3>${tweet.user.name}</h3>
    <h4 class="tagName">${tweet.user.handle}</h4>
  </header>
  <p>${tweet.content.text}</p>
  <footer>
    <p1>${new Date(tweet.created_at)}</p1>
    <div class="icons">
      <i class="fa fa-flag"></i>
        <i class="fa fa-heart"></i>
          <i class="fa fa-refresh"></i>
    </div>
  </footer>
</article>`;
  };
  renderTweets(data);
});