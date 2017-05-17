$('form').validate({
	rules: {
		email: {
			required: true
		},
		password: {
			required: true
		}
	},
	messages: {
		email: {
			required: '请输入账号'
		},
		password: {
			required: '请输入密码'
		}
	},
	submitHandler: function(form) {
		var id  = $(form).find('input[name=email]').val();
		var pwd = $(form).find('input[name=password]').val();

		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/student/' + id,
			dataType: 'json',
			success: function(data) {
				if (data != undefined && data.password === pwd) {
					store(id, data.name, 0);
				} else {
					$.ajax({
						type: 'GET',
						url: 'http://localhost:5000/api/teacher/' + id,
						dataType: 'json',
						success: function(response) {
							if (response != undefined && response.password === pwd) {
								store(id, response.name, 1);
							} else {
								toastr.error('登录失败!');
							}
						}
					})
				}
			}
		})
	}
});

function store(m_id, m_name, m_type) {
	$.ajax({
		type: 'POST',
		url: 'http://localhost:5000/api/session',
		headers: {
			'Content-Type': 'application/json'
		},
		data: JSON.stringify({
			id: m_id,
			name: m_name,
			type: m_type
		}),
		dataType: 'json',
		success: function(data) {
			if (data > 0) {
				window.location.href = 'index.html';
			} else {
				toastr.error('会话异常终止！');
			}
		}
	});
}