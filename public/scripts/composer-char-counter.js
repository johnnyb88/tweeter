$(document).ready(function() {
  $('textarea').on('keyup', function() {
    console.log(this.value.length);
    let tweetCount = $('span.counter').text((140 - ($(this).val().length)));
    if (tweetCount.text() < 0) {
      tweetCount.addClass('overtext');
    } else if (tweetCount.text() > 0) {
      tweetCount.removeClass('overtext');
    }
  });
});
//----- counts characters in the text area -----//