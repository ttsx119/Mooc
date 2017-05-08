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
		$.ajax({
			type: 'POST',
			url: 'http://localhost:5000/api/student',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: $(form).find('input[name=email]').val(),
				name: $(form).find('input[name=email]').val(),
				password: $(form).find('input[name=password]').val(),
				sex: '男',
				address: '隐藏',
				age: 13,
				phoneNumber: 13730133587,
				photoUrl: 'user.jpg',
				courseId: ''
			}),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success('注册成功!');

					setTimeout(function(){
						window.location.href = 'login.html';
					}, 3000);
				} else {
					toastr.error('注册失败!');
				}
			}
		});
	}
});