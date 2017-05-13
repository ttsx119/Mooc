// 获取所有一级分类
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/classification',
	dataType: 'json',
	success: function(data) {
		var typeHTML = '';

		data.map(function(item) {
			if (item.parentID === 0) {
				typeHTML += '<a href="javascript:void(0);" target="_parent" data-id="';
				typeHTML += item.id;
				typeHTML += '"">';
				typeHTML += item.name;
				typeHTML += '</a>';
			}
		});

		$('#content dl dl').eq(0).find('dd').html(typeHTML);

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
						data.map(function(item) {
							teacher.map(function(teacherItem) {
								if (teacherItem.id == item.teacherID) {
									teacherName = teacherItem.name;
									teacherIntr = teacherItem.introduction;
								}
							});

							courseHTML += '<li>';
							courseHTML += '<a href="lesson.html?id=';
							courseHTML += item.id;
							courseHTML += '" target="_parent" data-belong="';
							courseHTML += item.typeID;
							courseHTML += '">';
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
						});

						$('.course_list').html(courseHTML);

						pageChange(data.length);
					}
				});
			}
		});
	}
});