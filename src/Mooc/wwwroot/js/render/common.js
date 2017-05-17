// 渲染头部
function renderHeader(data) {
	if (data == null) {
		var headerHTML = '';

		headerHTML += '<div class="container">';
		headerHTML += '<img src="./dist/img/logo.png" alt="logo" />';
		headerHTML += '<nav>';
		headerHTML += '<ul>';
		headerHTML += '<li>';
		headerHTML += '<a href="index.html" target="_parent">首页</a>';
		headerHTML += '</li>';
		headerHTML += '<li>';
		headerHTML += '<a href="course.html" target="_parent">全部课程</a>';
		headerHTML += '</li>';
		headerHTML += '<li>';
		headerHTML += '<a href="note.html" target="_parent">留言板</a>';
		headerHTML += '</li>';
		headerHTML += '<li>';
		headerHTML += '<a href="user.html" target="_parent">个人中心</a>';
		headerHTML += '</li>';
		headerHTML += '</ul>';
		headerHTML += '</nav>';
		headerHTML += '<ul>';

		headerHTML += '<li>';
		headerHTML += '<a href="login.html" target="_parent">登录</a>';
		headerHTML += '</li>';

		headerHTML += '<li>|</li>';

		headerHTML += '<li>';
		headerHTML += '<a href="register.html" target="_parent">注册</a>';
		headerHTML += '</li>';

		headerHTML += '</ul>';
		headerHTML += '</div>';

		$('header').html(headerHTML);
	} else {
		if (data.type == 0) {
			$.ajax({
				type: 'GET',
				url: 'http://localhost:5000/api/student/' + data.id,
				dataType: 'json',
				success: function(student) {
					var headerHTML = '';

					headerHTML += '<div class="container">';
					headerHTML += '<img src="./dist/img/logo.png" alt="logo" />';
					headerHTML += '<nav>';
					headerHTML += '<ul>';
					headerHTML += '<li>';
					headerHTML += '<a href="index.html" target="_parent">首页</a>';
					headerHTML += '</li>';
					headerHTML += '<li>';
					headerHTML += '<a href="course.html" target="_parent">全部课程</a>';
					headerHTML += '</li>';
					headerHTML += '<li>';
					headerHTML += '<a href="note.html" target="_parent">留言板</a>';
					headerHTML += '</li>';
					headerHTML += '<li>';
					headerHTML += '<a href="user.html" target="_parent">个人中心</a>';
					headerHTML += '</li>';
					headerHTML += '</ul>';
					headerHTML += '</nav>';
					headerHTML += '<ul>';

					headerHTML += '<li>';
					headerHTML += '<a href="user.html" target="_parent">';
					headerHTML += student.name;
					headerHTML += '</a>';
					headerHTML += '</li>'

					headerHTML += '<li>|</li>';

					headerHTML += '<li>';
					headerHTML += '<a href="javascript:logout();" target="_parent">注销</a>';
					headerHTML += '</li>';

					headerHTML += '</ul>';
					headerHTML += '</div>';

					$('header').html(headerHTML);
				}
			});
		} else {
			$.ajax({
				type: 'GET',
				url: 'http://localhost:5000/api/teacher/' + data.id,
				dataType: 'json',
				success: function(teacher) {
					var headerHTML = '';

					headerHTML += '<div class="container">';
					headerHTML += '<img src="./dist/img/logo.png" alt="logo" />';
					headerHTML += '<nav>';
					headerHTML += '<ul>';
					headerHTML += '<li>';
					headerHTML += '<a href="index.html" target="_parent">首页</a>';
					headerHTML += '</li>';
					headerHTML += '<li>';
					headerHTML += '<a href="course.html" target="_parent">全部课程</a>';
					headerHTML += '</li>';
					headerHTML += '<li>';
					headerHTML += '<a href="note.html" target="_parent">留言板</a>';
					headerHTML += '</li>';
					headerHTML += '<li>';
					headerHTML += '<a href="user.html" target="_parent">个人中心</a>';
					headerHTML += '</li>';
					headerHTML += '</ul>';
					headerHTML += '</nav>';
					headerHTML += '<ul>';

					headerHTML += '<li>';
					headerHTML += '<a href="user.html" target="_parent">';
					headerHTML += teacher.name;
					headerHTML += '</a>';
					headerHTML += '</li>'

					headerHTML += '<li>|</li>';

					headerHTML += '<li>';
					headerHTML += '<a href="javascript:logout();" target="_parent">注销</a>';
					headerHTML += '</li>';

					headerHTML += '</ul>';
					headerHTML += '</div>';

					$('header').html(headerHTML);
				}
			});
		}
	}
}

// 渲染底部
function renderFooter() {
	var footerHTML = '';

	footerHTML += '<div class="footer_container">';
	footerHTML += '<a href="#" target="_parent">麦壳首页</a>';
	footerHTML += '<a href="#" target="_parent">联系我们</a>';
	footerHTML += '<a href="#" target="_parent">关于我们</a>';
	footerHTML += '<a href="#" target="_parent">提供意见</a>';
	footerHTML += '<div class="copyright">';
	footerHTML += '&copy;2016-2017 麦壳 京ICP备00000001号-1';
	footerHTML += '</div>';
	footerHTML += '</div>';

	$('footer').html(footerHTML);
}

// 前台整合
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/session',
	dataType: 'json',
	success: function(data) {
		if (data != undefined && data.length > 0) {
			renderHeader(data[0]);
		} else {
			renderHeader(null);
		}
	}
});

renderFooter();

// 导航栏特效
$('nav').find('li').click(function() {
	$(this).addClass('current').siblings().removeClass('current');
});

function logout() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost:5000/api/session',
		dataType: 'json',
		success: function(data) {
			if (data == undefined || data.length == 0) {
				toastr.error('非法登录！');

				window.location.href = 'login.html';
			} else {
				$.ajax({
					type: 'DELETE',
					url: 'http://localhost:5000/api/session/' + data[0].id,
					dataType: 'json',
					success: function(response) {
						if (response > 0) {
							toastr.success('注销成功');

							window.location.href = 'index.html';
						}
					}
				});
			}
		}
	});
}