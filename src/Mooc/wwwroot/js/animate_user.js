var session = {
	id: '130708119',
	name: 'Demo',
	type: 0
};

$('.sidebar').find('a').click(function() {
	switch(Number.parseInt($(this).attr('data-index'))) {
		case 1:
			renderPersonalInfo(session);
			break;
		case 2:
			renderPersonalInfoUpdate(session);
			break;
	}
});

function renderPersonalInfo(data) {
	if (data.type === 0) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/student/' + data.id,
			dataType: 'json',
			success: function(form){
				var infoHTML = '';

				infoHTML += '<dl class="form_list">';
				infoHTML += '<dt>';
				infoHTML += '<h1>';
				infoHTML += '<em></em>';
				infoHTML += '查看个人资料';
				infoHTML += '</h1>';
				infoHTML += '</dt>';
				infoHTML += '<dd>';
				infoHTML += '<form>';
				infoHTML += '<section>';
				infoHTML += '<label>姓名</label>';
				infoHTML += '<div>';
				infoHTML += form.name;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>性别</label>';
				infoHTML += '<div>';
				infoHTML += form.sex;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>家庭住址</label>';
				infoHTML += '<div>';
				infoHTML += form.address;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>年龄</label>';
				infoHTML += '<div>';
				infoHTML += form.age;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>联系方式</label>';
				infoHTML += '<div>';
				infoHTML += form.phoneNumber;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '</form>';
				infoHTML += '</dd>';
				infoHTML += '</dl>';

				$('.content').html(infoHTML);
			}
		});
	} else {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/teacher/' + data.id,
			dataType: 'json',
			success: function(form){
				var infoHTML = '';

				infoHTML += '<dl class="form_list">';
				infoHTML += '<dt>';
				infoHTML += '<h1>';
				infoHTML += '<em></em>';
				infoHTML += '查看个人资料';
				infoHTML += '</h1>';
				infoHTML += '</dt>';
				infoHTML += '<dd>';
				infoHTML += '<form>';
				infoHTML += '<section>';
				infoHTML += '<label>姓名</label>';
				infoHTML += '<div>';
				infoHTML += form.name;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>性别</label>';
				infoHTML += '<div>';
				infoHTML += form.sex;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>家庭住址</label>';
				infoHTML += '<div>';
				infoHTML += form.address;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>年龄</label>';
				infoHTML += '<div>';
				infoHTML += form.age;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<label>联系方式</label>';
				infoHTML += '<div>';
				infoHTML += form.phoneNumber;
				infoHTML += '</div>';
				infoHTML += '<label>个人介绍</label>';
				infoHTML += '<div>';
				infoHTML += form.introduction;
				infoHTML += '</div>';
				infoHTML += '</section>';
				infoHTML += '</form>';
				infoHTML += '</dd>';
				infoHTML += '</dl>';

				$('.content').html(infoHTML);
			}
		});
	}
}

function renderPersonalInfoUpdate(data) {
	if (data.type === 0) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/student/' + data.id,
			dataType: 'json',
			success: function(form) {
				var infoHTML = '';

				infoHTML += '<dl class="form_list">';
				infoHTML += '<dt>';
				infoHTML += '<h1>';
				infoHTML += '<em></em>';
				infoHTML += '个人资料完善';
				infoHTML += '</h1>';
				infoHTML += '</dt>';
				infoHTML += '<dd>';
				infoHTML += '<form>';
				infoHTML += '<section>';
				infoHTML += '<span>*</span>';
				infoHTML += '<label>姓名</label>';
				infoHTML += '<input type="text" placeholder="';
				infoHTML += form.name;
				infoHTML += '" name="username" />';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<span>*</span>';
				infoHTML += '<label>性别</label>';
				infoHTML += '<input type="radio" name="sex" value="';
				infoHTML += form.sex;
				infoHTML += '" checked="checked" /> 男';
				infoHTML += '<input type="radio" name="sex';
				infoHTML += form.sex;
				infoHTML += '" value="女" /> 女';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<span>*</span>';
				infoHTML += '<label>家庭住址</label>';
				infoHTML += '<input type="text" placeholder="';
				infoHTML += form.address;
				infoHTML += '" name="address" />';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<span>*</span>';
				infoHTML += '<label>年龄</label>';
				infoHTML += '<input type="text" placeholder="';
				infoHTML += form.age;
				infoHTML += '" name="age" />';
				infoHTML += '</section>';
				infoHTML += '<section>';
				infoHTML += '<span>*</span>';
				infoHTML += '<label>联系方式</label>';
				infoHTML += '<input type="text" placeholder="';
				infoHTML += form.phoneNumber;
				infoHTML += '" name="telNumber" />';
				infoHTML += '</section>';
				infoHTML += '<input type="submit" value="确定修改" />';
				infoHTML += '</form>';
				infoHTML += '</dd>';
				infoHTML += '</dl>';

				$('.content').html(infoHTML);

				$('.content').find('form').validate({
					submitHandler: function(item) {
						var newItem = item;

						//数据更新
						const name 		  = $('#resetModal').find('input[name=username]').val();
						const sex		  = $('#resetModal').find('input[name=sex]').val();
						const address 	  = $('#resetModal').find('input[name=address]').val();
						const age 		  = $('#resetModal').find('input[name=age]').val();
						const phoneNumber = $('#resetModal').find('input[name=telNumber]').val();

						newItem.name     	= name != '' ? name : newItem.name;
						newItem.sex     	= sex != '' ? sex : newItem.sex;
						newItem.address     = address != '' ? address : newItem.address;
						newItem.age     	= age != '' ? age : newItem.age;
						newItem.phoneNumber = phoneNumber != '' ? phoneNumber : newItem.phoneNumber;

						$.ajax({
							type: 'PUT',
							url: 'http://localhost:5000/api/student/' + data.id,
							headers: {
								'Content-Type': 'application/json'
							},
							data: JSON.stringify(newItem),
							dataType: 'json',
							success: function(subItem) {
								if (subItem > 0) {
									toastr.success('更新信息成功！');
								}
							}
						});
					}
				});
			}
		});
	}
}

				/*	
							
								
							
							
						
					
				
				<dl class="table_list">
					<dt>
						<h1>
							<em></em>
							已上传课程
						</h1>
					</dt>
					<dd>
						<form>
							<div class="filter_actions">
								<input type="checkbox" />
								<span>全选</span>
								<a href="javascript:void(0)" target="_parent">删除</a>
							</div>
							<ul>
								<li>
									<input type="checkbox" />
									<div>
										<div>
											<h3>
												<a href="javascript:void(0);" target="_parent">C++</a>
											</h3>
											<span>创建时间 2017-03-04</span>
										</div>
										<div>课程人数：</div>
									</div>
								</li>
								<li>
									<input type="checkbox" />
									<div>
										<div>
											<h3>
												<a href="javascript:void(0);" target="_parent">C++</a>
											</h3>
											<span>创建时间 2017-03-04</span>
										</div>
										<div>课程人数：</div>
									</div>
								</li>
								<li>
									<input type="checkbox" />
									<div>
										<div>
											<h3>
												<a href="javascript:void(0);" target="_parent">C++</a>
											</h3>
											<span>创建时间 2017-03-04</span>
										</div>
										<div>课程人数：</div>
									</div>
								</li>
							</ul>
						</form>
					</dd>
				</dl>
				<dl class="form_list">
					<dt>
						<h1>
							<em></em>
							修改密码
						</h1>
					</dt>
					<dd>
						<form>
							<section>
								<label>登录账号</label>
								<div>demo</div>
							</section>
							<section>
								<label>当前密码</label>
								<input type="text" placeholder="当前密码" name="username" />
							</section>
							<section>
								<label>新密码</label>
								<input type="text" placeholder="新密码" name="username" />
							</section>
							<section>
								<label>重复密码</label>
								<input type="text" placeholder="重复密码" name="username" />
							</section>
							<input type="submit" value="保存" />
						</form>
					</dd>
				</dl>
				*/