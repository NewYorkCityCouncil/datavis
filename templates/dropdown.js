 jQuery(document).on('change', '.div-toggle', function() {
  var target = jQuery(this).data('target');
  var show = jQuery("option:selected", this).data('show');
  jQuery(target).children().addClass('hide');
  jQuery(show).removeClass('hide');
});
jQuery(document).ready(function(){
	jQuery('.div-toggle').trigger('change');
});