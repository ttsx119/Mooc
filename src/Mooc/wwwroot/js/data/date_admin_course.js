// 定义表头
var table_head 		= ['id', '姓名', '操作'];

// 表头加载
var table_head_html = '';

table_head.map(function(item) {
	table_head_html += '<th>';
	table_head_html += item;
	table_head_html += '</th>';
});

$('thead').find('tr').html(table_head_html);

var table_body_html = '';

$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/course',
	dataType: 'json',
	success: function(data) {
		data.map(function(item) {
			table_body_html += '<tr>';

			table_body_html += '<td>';
			table_body_html += item.id;
			table_body_html += '</td>';

			table_body_html += '<td>';
			table_body_html += item.name;
			table_body_html += '</td>';

			table_body_html += '<td>';
			table_body_html += '<button class="btn btn-info btn-sm" type="button" data-toggle="modal" data-target="#resetModal" data-id="';
			table_body_html += item.id;
			table_body_html += '">更改</button>';
			table_body_html += '<button class="btn btn-danger btn-sm" type="button" data-toggle="modal" data-target="#delModal" data-id="';
			table_body_html += item.id;
			table_body_html += '">删除</button>';
			table_body_html += '</td>';

			table_body_html += '</tr>';
		});

		$('tbody').html(table_body_html);

		// Pagination
		pageChange(data.length);

	    jQuery('table').find('button').click(function() {
	        const id     = jQuery(this).attr('data-id');
	        const target = jQuery(jQuery(this).attr('data-target')).find('.data-item');

	        target.hasClass('form-control') ? target.val(id) : target.text(id);

	         data.map(function(item){
		    	if (item.id == id) {
		    		$('#resetModal').find('input[name=courseName]').attr('placeholder', item.name);
		    		$('#resetModal').find('input[name=courseCategory]').attr('placeholder', item.category);
		    		$('#resetModal').find('input[name=TeacherID]').attr('placeholder', item.teacherID);
		    		$('#resetModal').find('input[name=courseDuration]').attr('placeholder', item.courseDuration);
		    		$('#resetModal').find('input[name=courseTime]').attr('placeholder', item.courseTime);
		    		$('#resetModal').find('input[name=uploadTime]').attr('placeholder', item.uploadTime);
		    		$('#resetModal').find('input[name=studentnumber]').attr('placeholder', item.studentnumber);
		    		$('#resetModal').find('input[name=typeID]').attr('placeholder', item.typeID);
		    		$('#resetModal').find('input[name=uploadFile]').attr('placeholder', item.uploadFile);
		    		$('#resetModal').find('input[name=uploadFile1]').attr('placeholder', item.uploadFile1);
		    	}
		    });
	    });
	}
});

$('#delModal').find('form').validate({
	submitHandler: function(form) {
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:5000/api/course/' + $(form).find('.data-item').text(),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("删除课程成功!");
				} else {
					toastr.success("删除课程失败!");
				}

				$('#delModal').modal('hide');
			}
		});
	}
});

$('#resetModal').find('form').validate({
	submitHandler: function(form) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/course/' + $(form).find('.data-item').val(),
			dataType: 'json',
			success: function(data) {
				var newItem = data;

				//数据更新
				const name 	   = $('#resetModal').find('input[name=courseName]').val();
				const category  	   = $('#resetModal').find('input[name=courseCategory]').val();
				const teacherID  = $('#resetModal').find('input[name=TeacherID]').val();
				const duration      = $('#resetModal').find('input[name=courseDuration]').val();
				const courseTime   = $('#resetModal').find('input[name=courseTime]').val();
				const uploadTime	   = $('#resetModal').find('input[name=uploadTime]').val();
				const studentnumber = $('#resetModal').find('input[name=studentnumber]').val();
				const typeID = $('#resetModal').find('input[name=typeID]').val();
				const courseUrl = $('#resetModal').find('input[name=uploadFile]').val();
				const courseImgUrl = $('#resetModal').find('input[name=uploadFile1]').val();

				newItem.name    	= name != '' ? name : newItem.name;
				newItem.category     	= category != '' ? category : newItem.category;
				newItem.teacherID 	= teacherID != '' ? teacherID : newItem.teacherID;
				newItem.duration     	= duration != '' ? duration : newItem.duration;
				newItem.courseTime = courseTime != '' ? courseTime : newItem.courseTime;
				newItem.uploadTime	= uploadTime != '' ? uploadTime : newItem.uploadTime;
				newItem.studentnumber	= studentnumber != '' ? studentnumber : newItem.studentnumber;
				newItem.typeID	= typeID != '' ? typeID : newItem.typeID;
				newItem.courseUrl	= courseUrl != '' ? courseUrl : newItem.courseUrl;
				newItem.courseImgUrl	= courseImgUrl != '' ? courseImgUrl : newItem.courseImgUrl;


				if (data != undefined) {
					$.ajax({
						type: 'PUT',
						url: 'http://localhost:5000/api/course/' + $(form).find('.data-item').val(),
						headers: {
							'Content-Type': 'application/json'
						},
						data: JSON.stringify(newItem),
						dataType: 'json',
						success: function(item) {
							if (item > 0) {
								toastr.success('更新课程成功!');
								$('#resetModal').modal('hide');
							}
						}
					});
				} else {
					toastr.success("更新课程失败!");
				}

				$('#resetModal').modal('hide');

				
			}
		});
	}
});

$('#addModal').find('form').validate({
    rules: {
        userId: {
            required: true
        },
        userPwd: {
            required: true,
            minlength: 2
        },
        userName: {
            required: true
        },
        reUserPwd: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        userId: {
            required: 'Please input your userId'
        },
        userPwd: {
            required: 'Please input your password',
            minlength: 'Password required at least 2 words'
        },
        userName: {
            required: 'Please input your username'
        },
        reUserPwd: {
            required: 'Please input your password again',
            minlength: 'Password required at least 2 words'
        }
    },
	submitHandler: function(form) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:5000/api/course',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: $(form).find('input[name=courseId]').val(),
				name: $(form).find('input[name=courseName]').val(),
				category: $(form).find('input[name=courseCategory]').val(),
				teacherID: $(form).find('input[name=TeacherID]').val(),
				duration: $(form).find('input[name=courseDuration]').val(),
				courseTime: $(form).find('input[name=courseTime]').val(),
				uploadTime: $(form).find('input[name=uploadTime]').val(),
				studentNumber: $(form).find('input[name=studentnumber]').val(),
				typeID: $(form).find('input[name=typeID]').val(),
				courseUrl: $(form).find('input[name=uploadFile]').val(),
				courseImgUrl: $(form).find('input[name=uploadFile1]').val(),
				
			}),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("添加课程成功!");
				} else {
					toastr.success("添加课程失败!");
				}

				$('#addModal').modal('hide');
			}
		});
	}
});