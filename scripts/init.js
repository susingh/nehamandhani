$(document).ready(function(){
	$('#slider').slidertron({
		viewerSelector:			'.viewer',
		reelSelector:			'.viewer .reel',
		slidesSelector:			'.viewer .reel .slide',
		advanceDelay:			5000,
		speed:					'slow',
		activeSlideClass:		'slide-active',
		captionLines:			1,
		indicatorSelector:		'.indicator ul li',
		captionLineSelector:	'.captionLine',
		slideCaptionSelector:	'.caption'
	});
});