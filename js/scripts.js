(function($) {
	$(document).ready(function() {
		$('ul.tablinks a').on('click', function(
      let tabID = $(this).data('id');
      $('#wrapper .tab').removeClass('shown');
      $('#wrapper .tab#' + tabID).addClass('shown');
		)};
	});
})(jQuery);
