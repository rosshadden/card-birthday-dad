$(function(){
	$('#envelope')
		.on('click', '#envelope_front', function(){
			$('#envelope_front').toggleClass('flipped');
			$('#envelope_back').toggleClass('flipped');
		})
		.on('click', '#flap_outside', function(){
			$('#flap_outside').toggleClass('open');
			$('#flap_inside').toggleClass('open');

			$('#envelope_back_outside').on('click', function(){
				$('#card').toggleClass('removed');
				return false;
			});

			return false;
		})
		.on('click', '#card', function(){
			$('#card_outside_front').toggleClass('open');
			$('#card_inside_top').toggleClass('open');
			return false;
		});
});
