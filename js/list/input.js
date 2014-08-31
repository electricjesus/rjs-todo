// Class input.js
define(['jquery'], function($) {
	var module = {

	}
	var Input = function(elem, parent) {
		if(!elem) return undefined;
		var elem = $(elem);

		elem.on('keyup', function(e) {
			if((e.keyCode || e.which) === 13 && elem.val().length > 3) {
				parent.trigger('todo:add', [elem.val()])
				elem.val('');
			}
		})

		return module;
	}
	return Input;
});