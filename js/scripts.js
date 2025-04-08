(function($) {
	$(document).ready(function() {
		$('ul.tablinks a').on('click', function(
      var tabID = $(this).data('id');
      $('#wrapper .tab').removeClass('shown');
      $('#wrapper .tab#' + tabID).addClass('shown');
		)};
	});
})(jQuery);
