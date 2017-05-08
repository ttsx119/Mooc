$('nav').find('li').eq(0).addClass('current');

// 热门课程切换
$('.tab_header').find('li').eq(0).addClass('current');
$('.tab_body').find('ul').eq(0).show();
$('.tab_body').find('ul').eq(1).hide();

$('.tab_header').find('li').click(function() {
	$(this).addClass('current').siblings().removeClass('current');

	$('.tab_body').find('ul').hide();
	$('.tab_body').find('ul').eq($(this).index()).show();
});