// Class input.js
define(['jquery'], function($) {
	var module = {

	}

	var Input = function(elem) {
		if(!elem) return undefined;
		module.elem = $(elem);
		return module;
	}
	return Input;
});