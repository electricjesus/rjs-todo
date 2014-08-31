// Class input.js
define(['jquery'], function($) {
	
	var module = {
		test : function() {
			console.log(this.elem);
		}
	}

	var List = function(elem) {
		if(!elem) return undefined;
		module.elem = $(elem);
		return module;
	}
	return List;
});