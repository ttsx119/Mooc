var nav = [
    {id: 1, text: '管理员', icon: 'user', link: 'admin_admin.html', pid: 0},
    {id: 2, text: '留言板', icon: 'barcode', link: 'admin_note.html', pid: 0},
    {id: 3, text: '教师表', icon: 'vcard', link: 'admin_teacher.html', pid: 0},
    {id: 4, text: '学生表', icon: 'vcard-o', link: 'admin_student.html', pid: 0},
    {id: 5, text: '课程表', icon: 'book', link: 'admin_course.html', pid: 0}
];

var navHtml = '';

nav.map(function(item) {
	if (item.pid === 0) {
		navHtml += '<li>';
		navHtml += '<a href="';
		navHtml += item.link;
		navHtml += '" target="_parent">';
		
		navHtml += '<i class="fa fa-';
		navHtml += item.icon;
		navHtml += '"></i>';

		navHtml += '<span class="title">';
		navHtml += item.text;
		navHtml += '</span>';
		navHtml += '</a>';

		navHtml += '<ul>';

		nav.map(function(subItem) {
			if (subItem.pid === item.id) {
				navHtml += '<li>';
				navHtml += '<a href="';
				navHtml += subItem.link;
				navHtml += '" target="_parent">';
				navHtml += '<span class="title">';
				navHtml += subItem.text;
				navHtml += '</span>';
				navHtml += '</a>';
				navHtml += '</li>';
			}
		});

		navHtml += '</ul>';
		navHtml += '</li>';
	}
});

$('#consoleApp nav').find('ul').html(navHtml);
jQuery('#container').perfectScrollbar();
jQuery('#container').find('> header > ul:last-child > li').click(function() {
    jQuery(this).toggleClass('open');
});

// Check if login valid.
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/session',
	dataType: 'json',
	success: function(data) {
		if (data == undefined || data.length == 0) {
			toastr.error('非法登录！');

			window.location.href = 'admin_login.html';
		}
	}
});

// Logout
$('.dropdown-menu').find('li:last-of-type a').click(function() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost:5000/api/session',
		dataType: 'json',
		success: function(data) {
			if (data != undefined) {
				const id = data[0].id;

				$.ajax({
					type: 'DELETE',
					url: 'http://localhost:5000/api/session/' + id,
					dataType: 'json',
					success: function(item) {
						if (item > 0) {
							toastr.success('登出成功!');

							window.location.href = 'admin_login.html';
						} else {
							toastr.error('登出失败!');
						}
					}
				});
			} else {
				toastr.error('登录已过期！');

				window.location.href = 'admin_login.html';
			}
		}
	})
});