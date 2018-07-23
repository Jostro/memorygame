$(document).ready( function() {

	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	$('.square').on('click', function() {
		var imagesToMatch = [
			"img 1",
			"img 1",
			"img 2",
			"img 2",
			"img 3",
			"img 3"
		];
	

	});
	var shuffledImg = Shuffle(imagesToMatch);

	$(shuffledImg).each(function(i){
		for (var i=0;i<imagesToMatch.length;i++) {
			$(".square").append(imagesToMatch[i]);
			
			 }
		  });
});


