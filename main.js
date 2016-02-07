var main = function(){
	
	// Margin-setter for page load
	var timeBeforeLoad = 3000;
	
	function showContent(){
		// This will only show after the timeBeforeLoad hits zero
		var marginSetter = $('#margin-setter');
		
		setTimeout(function(){ marginSetter.css("height", "0vh");}, timeBeforeLoad)
	}
	
	showContent();
	
	// Animated Header
	var animationDelay = 5000;
	 
	animateHeadline($('#post-header'));
	 
	function animateHeadline($headlines) {
		$headlines.each(function(){
			var headline = $(this);
			setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
		});
	}
	
	function hideWord($word) {
		var nextWord = takeNext($word);
		switchWord($word, nextWord);
		setTimeout(function(){ hideWord(nextWord) }, animationDelay);
	}
	 
	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}
	 
	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
};

// run main on page load
$(document).ready(main);