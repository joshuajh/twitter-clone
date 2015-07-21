$(document).ready(function() {

$('#tweet-content').on('click', function() {
	$('#tweet-controls').css('display', 'block');
})

$('.tweet-compose').on('click', function() {
	$('.tweet-compose').css('height', '5em');
})

$('.tweet-compose').on('keyup', function() {
	var count = $(this).val();
	var newCount = 140 - count.length;
	var displayCount = $('#char-count')[0];
	displayCount.textContent = newCount;
		if (newCount <= 10) {
			$('#char-count').css('color', 'red');
	}
		else {
			$('#char-count').css('color', 'black')
		}
		if (newCount < 0) {
			$('.button').attr('disabled', true);
	}
		else {
			$('.button').removeAttr('disabled');
		}
})

function addNewTweet() {
        var newTweetText = $('.tweet-compose').val();

        var newTweet = '<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/alagoon.jpg">' +
            '<strong class="fullname">J. Hamblin </strong>' +
            '<span class="username">@JJH12</span>' +
            '<p class ="tweet-text">' + newTweetText + '</p>' +
            '</div></div>';

        return newTweet;
    }

    $('.button').on('click', function () {
        $('#stream').prepend(addNewTweet);
    });

});