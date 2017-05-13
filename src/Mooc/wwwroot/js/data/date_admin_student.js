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
	url: 'http://localhost:5000/api/student',
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

	        target.tagName === 'input' ? target.val(id) : target.text(id);
	    });
	}
});

$('#delModal').find('form').validate({
	submitHandler: function(form) {
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:5000/api/student/' + $(form).find('.data-item').text(),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("删除学生成功!");
				} else {
					toastr.success("删除学生失败!");
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
			url: 'http://localhost:5000/api/student/' + $(form).find('.data-item').text(),
			dataType: 'json',
			success: function(data) {
				var newItem = data;

				newItem.password = '000000';

				if (data != undefined) {
					$.ajax({
						type: 'PUT',
						url: 'http://localhost:5000/api/student/' + $(form).find('.data-item').text(),
						headers: {
							'Content-Type': 'application/json'
						},
						data: JSON.stringify(newItem),
						dataType: 'json',
						success: function(item) {
							if (item > 0) {
								toastr.success('更新学生成功!');
								$('#resetModal').modal('hide');
							}
						}
					});
				} else {
					toastr.success("更新学生失败!");
				}

				$('#resetModal').modal('hide');
			}
		});
	}
});

$('#addModal').find('form').validate({
	submitHandler: function(form) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:5000/api/student',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: $(form).find('input[name=userId]').val(),
				name: $(form).find('input[name=userName]').val(),
				password: $(form).find('input[name=userPwd]').val(),
				sex: $(form).find('input[name=userSex]').val(),
				address: $(form).find('input[name=userAddress]').val(),
				age: $(form).find('input[name=userAge]').val(),
				phoneNumber: $(form).find('input[name=userNum]').val(),
				photoUrl: $(form).find('input[name=uploadFile]').val(),	
			}),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("添加学生成功!");
				} else {
					toastr.success("添加学生失败!");
				}

				$('#addModal').modal('hide');
			}
		});
	}
});