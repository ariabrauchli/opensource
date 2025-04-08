(function($) {
	$(document).ready(function() {
		$('ul.tablinks a').on('click', function(
      var tabID = $(this).data('id');
      $('#wrapper .container').hide();
      $('#wrapper .container#' + tabID).show();
		)};
	});
})(jQuery);
