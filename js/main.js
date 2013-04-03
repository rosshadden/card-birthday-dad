$(function(){
	$('#content')
		.children('#cake')
			.draggable();

	// Add Flip Envelope Event Handler
	document.getElementById('envelope_front').onclick = function(){
		document.getElementById('envelope_front').classList.toggle('flipped');
		document.getElementById('envelope_back').classList.toggle('flipped');
	}

	// Add Open Envelope Event Handler
	document.getElementById('flap_outside').onclick = function(){

		document.getElementById('flap_outside').classList.toggle('open');
		document.getElementById('flap_inside').classList.toggle('open');

		// Add Remove Card Event Handler
		// This is added after "Open Envelope" so that card can't be removed
		// until the envelope has been opened
		document.getElementById('envelope_back_outside').onclick = function(){
			document.getElementById('card').classList.toggle('removed');
			return false;
		}

		return false;
	}

	// Open Card
	document.getElementById('card').onclick = function(){
		document.getElementById('card_outside_front').classList.toggle('open');
		document.getElementById('card_inside_top').classList.toggle('open');
		return false;
	}
});
