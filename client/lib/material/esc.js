// close menu and/or tile if esc key is pressed
	$(document).keyup(function(e) {
		if (e.which == '27') {
			if ($('body').hasClass('menu-open')) {
				mReset();
			} else {
				tReset();
			}
		}
	});