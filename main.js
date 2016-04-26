$(document).ready(function(){
/*Attach a click event listener to each img tag
	when the document is ready*/
	$('img').click(function(){
		/*call the replaceImg function, which
			takes the this object (img) and
			it's placeholder attribute name*/
		replaceImg(this, 'placeholder');
	});

	$('button').click(function(){
		/*restore the original img src attribute url*/
		$('img').attr('src', 'education_info17.png');
	});
});

/*Swap out current img for a transparent .png img,
	which ensures that each image position is
	maintained, after each fadeOut*/
	var replaceImg = function(theObject, theAttribute){
		/*store the img url returned by the .attr function*/
		var placeholderUrl = $(theObject).attr(theAttribute);

		/*fadeOut current img, and replace the src attribute
			url with placeholder attribute url*/
		$(theObject).fadeOut(2000, function(){
			$(theObject).attr('src', placeholderUrl).fadeIn(0);
		});
	};