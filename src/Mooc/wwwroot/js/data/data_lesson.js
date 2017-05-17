// 登录校验
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/session',
	dataType: 'json',
	success: function(data) {
		if (data == undefined || data.length == 0) {
			toastr.error('非法登录！');

			window.location.href = 'login.html';
		} else {
			$('input').click(function() {
				add_lesson(data[0]);
			});
		}
	}
});

function getId() {
	var url = window.location.href;

	if (url.indexOf("?") === -1) {
		window.location.href = 'index.html';
	}

	return url.substr(url.indexOf("?") + 1).split("=")[1];
}

$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/course/' + getId(),
	dataType: 'json',
	success: function(data) {
		if (data != undefined) {
			$('video').attr('src', '../../res/video/' + data.courseUrl);

			$.ajax({
				type: 'GET',
				url: 'http://localhost:5000/api/teacher/' + data.teacherID,
				dataType: 'json',
				success: function(item) {
					$('span:first-of-type').text('上课教师：' + item.name);
					$('span:last-of-type').text('简介：' + item.introduction);
				}
			});
		}
	}
});

function add_lesson(session) {
	if(session.type == 0){
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/student/' + session.id,
			dataType: 'json',
			success: function(form){
				const courseArray = form.courseID.split(",");
				var hasCourse = false;
				var newForm = form;

				courseArray.map(function(item) {
					if (item == getId()) {
						hasCourse = true;
					}
				});

				if (!hasCourse) {
					newForm.courseID += ',';
					newForm.courseID += getId();

					$.ajax({
						type: 'GET',
						url: 'http://localhost:5000/api/course/' + getId(),
						dataType: 'json',
						success: function(data){
							$.ajax({
								type: 'PUT',
								url: 'http://localhost:5000/api/student/' + session.id,
								headers: {
									'Content-Type': 'application/json'
								},
								data: JSON.stringify(newForm),
								dataType: 'json',
								success:function(subItem){
									if (subItem > 0) {
										var newdata = data ;
										newdata.studentNumber = newdata.studentNumber + 1;
										$.ajax({
											type:'PUT',
											url: 'http://localhost:5000/api/course/' + getId(),
											headers: {
												'Content-Type': 'application/json'
											},
											data:JSON.stringify(newdata),
											dataType: 'json',
											success:function(subItem1){
												if(subItem1 > 0){
													toastr.success("选课成功!");
												}
												else{
													toastr.success("选课失败!");
												}
											}
										});
									}
									else {
										toastr.success("选课失败!");
									}
								}
							});
						}
					});
						
				}
				else{
					toastr.success("课程重复!");
				}
			}
				
		});
	} else {
		toastr.success("教师无法选课!");
	}
}