(function($) {
	$(document).ready(function() {
		$('ul.tablinks a').on('click', function(
      var tabID = $(this).data('id');
      $('#wrapper .tab').hide();
      $('#wrapper .tab#' + tabID).show();
		)};
	});
})(jQuery);
