$(function(){
    $('.carousel').cycle({
		fx: 'scrollLeft',
		timeout: 0,
		pager: '#nav'
	});
    
    showcaseAnimation();
});

var showcaseAnimation = function() {
    var $container = $("#demo"),
        command = '$("p.demo").addClass("ohmy").slideDown();'.split('');

    function runAnimation() {
        $("p.demo").addClass("ohmy").slideDown();
    }

    function type() {
        if (!command.length) {
            runAnimation();
            return;
        }

        $container.append(command.shift(1))
        setTimeout(type, 80);
    }

    type();
};