// 获取所有一级分类
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/classification',
	dataType: 'json',
	success: function(data) {
		var typeHTML = '';

		data.map(function(superItem) {
			if (superItem.parentID === 0) {
				var idArray = '';

				data.map(function(item) {
					if (item.parentID === superItem.id) {
						data.map(function(subItem) {
							if (subItem.parentID === item.id) {
								idArray += subItem.id;
								idArray += ',';
							}
						});
					}
				});

				typeHTML += '<a href="javascript:void(0);" target="_parent" data-id="';
				typeHTML += idArray;
				typeHTML += '"">';
				typeHTML += superItem.name;
				typeHTML += '</a>';
			}
		});

		$('#content dl dl').eq(0).find('dd').html(typeHTML);

		$('#content dl dl:nth-child(1) a').eq(0).addClass('current');

		$('#content dl dl:nth-child(1) a').click(function() {
			$(this).addClass('current').siblings().removeClass('current');

			displayCourse();
		});

		$('#content dl dl:nth-child(2) a').click(function() {
			$(this).addClass('current').siblings().removeClass('current');

			displayCourse();
		});

		$('#content dl dl:nth-child(3) a').click(function() {
			$(this).addClass('current').siblings().removeClass('current');

			displayCourse();
		});
	}
});

function displayCourse() {
	// 获取过滤条件
	const belongArray = $('#content dl dl').eq(0).find('a.current').attr('data-id').split(',');
	belongArray.pop();

	const time = $('#content dl dl').eq(1).find('a.current').text();
	const kinds = $('#content dl dl').eq(2).find('a.current').index();

	// 获取所有课程
	$.ajax({
		type: 'GET',
		url: 'http://localhost:5000/api/course',
		dataType: 'json',
		success: function(data) {
			var courseHTML  = '';
			var teacherName = '';
			var teacherIntr = '';

			$.ajax({
				type: 'GET',
				url: 'http://localhost:5000/api/teacher',
				dataType: 'json',
				success: function(teacher) {
					var len = 0;

					data.map(function(item) {
						var skip = false;

						// 条件过滤
						belongArray.map(function(belong) {
							if (belong == item.typeID) {
								if (item.category != kinds) {
									skip = true;
								}
							}
						});

						if (skip) {
							len += 1;

							teacher.map(function(teacherItem) {
								if (teacherItem.id == item.teacherID) {
									teacherName = teacherItem.name;
									teacherIntr = teacherItem.introduction;
								}
							});

							courseHTML += '<li>';
							courseHTML += '<a href="lesson.html?id=';
							courseHTML += item.id;
							courseHTML += '" target="_parent">';
							courseHTML += '<img src="../../res/img/';
							courseHTML += item.courseImgUrl;
							courseHTML += '" alt="logo" />';
							courseHTML += '<span>选课人数：';
							courseHTML += item.studentNumber;
							courseHTML += '</span>';
							courseHTML += '</a>';
							courseHTML += '<p>老师：';
							courseHTML += teacherName;
							courseHTML += '</p>';
							courseHTML += '<p>简介：';
							courseHTML += teacherIntr;
							courseHTML += '</p>';
							courseHTML += '</li>';
						}
					});

					$('.course_list').html(courseHTML);

					pageChange(len);
				}
			});
		}
	});
}