// 定义表头
var table_head 		= ['账号', '名称', '操作'];

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
	url: 'http://localhost:5000/api/admin',
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
			table_body_html += '">重置</button>';
			table_body_html += '<button class="btn btn-danger btn-sm" type="button" data-toggle="modal" data-target="#delModal" data-id="';
			table_body_html += item.id;
			table_body_html += '">删除</button>';
			table_body_html += '</td>';

			table_body_html += '</tr>';
		});

		$('tbody').html(table_body_html);

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
			url: 'http://localhost:5000/api/admin/' + $(form).find('.data-item').text(),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("删除管理员成功!");
				} else {
					toastr.success("删除管理员失败!");
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
			url: 'http://localhost:5000/api/admin/' + $(form).find('.data-item').text(),
			dataType: 'json',
			success: function(data) {
				var newItem = data;

				newItem.password = '000000';

				if (data != undefined) {
					$.ajax({
						type: 'PUT',
						url: 'http://localhost:5000/api/admin/' + $(form).find('.data-item').text(),
						headers: {
							'Content-Type': 'application/json'
						},
						data: JSON.stringify(newItem),
						dataType: 'json',
						success: function(item) {
							if (item > 0) {
								toastr.success('更新管理员成功!');
								$('#resetModal').modal('hide');
							}
						}
					});
				} else {
					toastr.success("更新管理员失败!");
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
			url: 'http://localhost:5000/api/admin',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: $(form).find('input[name=userId]').val(),
				name: $(form).find('input[name=userName]').val(),
				password: $(form).find('input[name=userPwd]').val(),
				right: 1
			}),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("添加管理员成功!");
				} else {
					toastr.success("添加管理员失败!");
				}

				$('#addModal').modal('hide');
			}
		});
	}
});