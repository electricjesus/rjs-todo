require(['jquery', 'components/list'], function($, List) {
  $(document).ready(function() {
  	window.components = [];
    $('.b-todo-list').each(function() {
    	components.push(new List(this));
    });
  });
});