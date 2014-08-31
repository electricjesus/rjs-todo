require(['jquery', 'components/list'], function($, List) {
  
  	var components = [];
    $('.b-todo-list').each(function() {
    	components.push(new List(this));
    });
});