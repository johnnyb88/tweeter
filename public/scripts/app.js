$(document).ready(() => {

  const loadTweets = function() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      data: {
        format: 'json'
      }
    })
      .done(function (tweets) {
        renderTweets(tweets);
      });
  };
  loadTweets();


  //----ajax post request that post to server with a serialized data ---//
  const $button = $('#tweetForm');
  $button.on('submit', function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');

    let tweetPost = $("#tweetPost");

    if (tweetPost.val().length === 0) {
      $(".errorMessage").text("Error! You cannot post an empty field.").slideDown("slow").addClass(".errorDisplay");
    } else if (tweetPost.val().length > 140) {
      $(".errorMessage").text("Error! You've reached your character limit.").slideDown('slow').addClass(".errorDisplay");
    } else {
      $(".errorMessage").slideUp('fast').removeClass('.errorDisplay');
      $.ajax({ url: '/tweets', method: 'POST', data: $(this).serialize()  })
        .then(function (newTweet) {
          tweetPost.val("");
          $('.tweets-container').empty();
          loadTweets(newTweet);
        });
    }
  });
  
  //----slide new tweet toggle ----//
  $(".sliderBtn").click(function() {
    $(".new-tweet").slideToggle();
    $("#tweetPost").focus();
  });
  

  const renderTweets = function(tweets) {
    const container = $('.tweets-container');
    for (let tweet of tweets) {
      let output = createTweetElement(tweet);
      container.prepend(output);
    }
  };

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    return ` <article>
  <header class="tweetHeader"><img class= "profile" src="${escape(tweet.user.avatars)}"><h3>${escape(tweet.user.name)}</h3>
    <h4 class="tagName">${escape(tweet.user.handle)}</h4>
  </header>
  <p>${escape(tweet.content.text)}</p>
  <footer>
    <p1>${escape(new Date(tweet.created_at))}</p1>
    <div class="icons">
      <i class="fa fa-flag"></i>
        <i class="fa fa-heart"></i>
          <i class="fa fa-refresh"></i>
    </div>
  </footer>
</article>`;
  };
});



