// Class item.js
define(['jquery'], function($) {
	var module = {

	}
	var Item = function(elem, parent) {
		if(!elem) return undefined;
		var elem = $(elem);

		elem.on('click','button', function(e) {
			elem.remove();
			parent.trigger('todo:del');
		})

		module.elem = elem;

		return module;
	}
	return Item;
});