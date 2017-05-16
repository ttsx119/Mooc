// 定义表头
var table_head 		= ['发送人ID', '留言内容', '操作'];

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
	url: 'http://localhost:5000/api/note',
	dataType: 'json',
	success: function(data) {
		data.map(function(item) {
			table_body_html += '<tr>';

			table_body_html += '<td>';
			table_body_html += item.noterID;
			table_body_html += '</td>';

			table_body_html += '<td>';
			table_body_html += item.content;
			table_body_html += '</td>';

			table_body_html += '<td>';
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
			url: 'http://localhost:5000/api/note/' + $(form).find('.data-item').text(),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("删除留言成功!");
				} else {
					toastr.success("删除留言失败!");
				}

				$('#delModal').modal('hide');
			}
		});
	}
});

$('#addModal').find('form').validate({
	submitHandler: function(form) {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:5000/api/note',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: $(form).find('input[name=lyID]').val(),
				noterID: $(form).find('input[name=NoterID"]').val(),
				content: $(form).find('input[name=content]').val(),
				noteTime: $(form).find('input[name=notetime]').val(),
			}),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success("添加留言成功!");
				} else {
					toastr.success("添加留言失败!");
				}

				$('#addModal').modal('hide');
			}
		});
	}
});