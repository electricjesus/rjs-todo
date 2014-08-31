// Class input.js
define(['jquery','components/list/input','db','hbs!templates/items'], function($, Input, DB, template) {
	
	var module = {
		
	}
	var List = function(elem) {
		if(!elem) return undefined;
		var elem = $(elem);
		elem.find('.actions input[type=text]').each(function() {
			new Input(this, elem);
		});

		elem.on('todo:add', function(e, item) {
			
		});
		return module;
	}
	return List;
});