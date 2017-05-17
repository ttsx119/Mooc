$('#loginApp').find('form').validate({
    rules: {
        username: {
            required: true
        },
        password: {
            required: true
        }
    },
    messages: {
        username: {
            required: 'Please input your username'
        },
        password: {
            required: 'Please input your password'
        }
    },
    submitHandler: function(form) {
        var id  = $(form).find('input[name=username]').val();
        var pwd = $(form).find('input[name=password]').val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:5000/api/admin/' + id,
            dataType: 'json',
            success: function(data) {
                if (data != undefined && data.password == pwd) {
                    store(id, data.name);
                } else {
                    toastr.error('登录出错，请稍后重试!')
                }
            }
        });
    }
});

function store(m_id, m_name) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/api/session',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            id: m_id,
            name: m_name,
            type: 3
        }),
        dataType: 'json',
        success: function(data) {
            if (data > 0) {
                window.location.href = 'admin_admin.html';
            } else {
                toastr.error('会话异常终止！');
            }
        }
    });
}