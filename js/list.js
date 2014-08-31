// Class input.js
define(['jquery','components/list/input','components/list/item','db','hbs!templates/items'], function($, Input, Item, DB, template) {
	
	var module = {
		
	}
	var List = function(elem) {
		if(!elem) return undefined;
		var elem = $(elem);
		var list = elem.find('ul');
		elem.find('.actions input[type=text]').each(function() {
			new Input(this, elem);
		});

		elem
			.on('todo:add', function(e, item) {
				list.find('li.notice').remove();
				var todo = new Item($(template([item])), elem)
				$(todo.elem).appendTo(list);
			})
			.on('todo:del', function(e, uuid) {
				// todo: remove first then 
				if(!list.find('li').length) {
					$(template([])).appendTo(list);
				}
			})
			.on('todo:init', function() {

				$(template([])).appendTo(list);	
			})
			;

		elem.trigger('todo:init');
		return module;
	}
	return List;
});