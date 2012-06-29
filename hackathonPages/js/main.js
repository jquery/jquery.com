$(function(){
    showcaseAnimation();
});

var showcaseAnimation = function() {
    var $span = $("#demo"),
        command = '$("p.demo").addClass("ohmy").slideDown();'.split('');

    function runAnimation() {
        $("p.demo").addClass("ohmy").slideDown();
    };

    function type() {
        if (!command.length) {
            runAnimation();
            return;
        }

        $span.append(command.shift(1))
        setTimeout(type, 80);

    };

    type();
};

(function($) {
  $('.carousel').cycle({
		fx: 'scrollLeft',
		timeout: 0,
		pager: '#nav'
	});
})(jQuery);