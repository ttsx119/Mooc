// 前台整合
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/session',
	dataType: 'json',
	success: function(data) {
		if (data == undefined || data.length == 0) {
			toastr.error('非法登录！');

			window.location.href = 'login.html';
		} else {
			if (data[0].type == 0) {
				$('.sidebar > a').hide();

				$('.dynamic_display').text('已选课程');
				$('.sidebar').find('a[data-index=3]').text('已选课程');
			} else {
				$('.dynamic_display').text('我上传的课程');
				$('.sidebar').find('a[data-index=3]').text('我上传的课程');				
			}

			renderPersonalInfo(data[0]);

			$('.sidebar').find('a').click(function() {
				switch(Number.parseInt($(this).attr('data-index'))) {
					case 0:
						renderCourseUpload(data[0]);
						break;
					case 1:
						renderPersonalInfo(data[0]);
						break;
					case 2:
						renderPersonalInfoUpdate(data[0]);
						break;
					case 3:
						renderMyCourse(data[0]);
						break;
					case 4:
						renderMyPassword(data[0]);
						break;
				}
			});
		}
	}
});

//课程上传
function renderCourseUpload(data) {
	if (data.type === 1) {
		var infoHTML = '';

		infoHTML += '<dl class="form_list">';
		infoHTML += '<dt>';
		infoHTML += '<h1>';
		infoHTML += '<em></em>';
		infoHTML += '上传新课程';
		infoHTML += '</h1>';
		infoHTML += '<dd>';
		infoHTML += '<form>';
		infoHTML += '<section>';
		infoHTML += '<span>*</span>';
		infoHTML += '<label>课程分类</label>';
		infoHTML += '<input type="text" placeholder="请输入课程分类码" name="courseclass" />';
		infoHTML += '</section>';
		infoHTML += '<section>';
		infoHTML += '<span>*</span>';
		infoHTML += '<label>课程名称</label>';
		infoHTML += '<input type="text" placeholder="课程名称：如C++" name="coursename" />';
		infoHTML += '</section>';
		infoHTML += '<section>';
		infoHTML += '<span>*</span>';
		infoHTML += '<label>上传课程</label>';
		infoHTML += '<input type="text" placeholder="请粘贴您的课程所在url地址" name="courseupload" />';
		infoHTML += '</section>';
		infoHTML += '<section>';
		infoHTML += '<span>*</span>';
		infoHTML += '<label>上课时间</label>';
		infoHTML += '<div>';
		infoHTML += '<input type="text" placeholder="" name="courseTime"  />';
		infoHTML += '</div>';
		infoHTML += '</section>';
		infoHTML += '<input type="submit" value="确定上传" />';
		infoHTML += '</form>';
		infoHTML += '</dd>';
		infoHTML += '</dt>';
		infoHTML += '</dl>';

		$('.content').html(infoHTML);

		$('.content').find('form').validate({
			submitHandler: function(item) {
				item.id = Date.parse(new Date());
				item.uploadTime = getTime(new Date());
				$.ajax({
					type: 'POST',
					url: 'http://localhost:5000/api/course',
					headers: {
			            'Content-Type': 'application/json'
			        },
        			data: JSON.stringify({

			            id: item.id,
			            name: $(item).find('input[name=coursename]').val(),
			            typeID: $(item).find('input[name=courseclass]').val(),
			            courseUrl: $(item).find('input[name=courseupload]').val(),
			            courseTime: $(item).find('input[name=courseTime]').val(),
			            teacherID: data.id,
			            uploadTime: item.uploadTime,

			        }),
			        dataType: 'json',
			        success:function(submit){
			        	if (submit > 0) {
							toastr.success("上传成功!");
							renderMyCourse(session);
						}
						else{
							toastr.success("上传失败！");
						}
			        }

				});
			}
		});
	}
}

//个人信息查询
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

//个人信息更改
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
						var newItem = form;

						//数据更新
						const name 		  = $(item).find('input[name=username]').val();
						const sex		  = $(item).find('input[name=sex]').val();
						const address 	  = $(item).find('input[name=address]').val();
						const age 		  = $(item).find('input[name=age]').val();
						const phoneNumber = $(item).find('input[name=telNumber]').val();

						newItem.name     	= name != '' ? name : newItem.name;
						newItem.sex     	= sex != '' ? sex : newItem.sex;
						newItem.address     = address != '' ? address : newItem.address;
						newItem.age     	= age != '' ? age : newItem.age;
						newItem.phoneNumber = phoneNumber != '' ? phoneNumber : newItem.phoneNumber;

						if (data != undefined) {
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
										toastr.success('更新学生成功!');
									}
								}
							});
						} else {
							toastr.success("更新学生失败!");
						}

					}
				});	
			}
		});
	}else{
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/teacher/' + data.id,
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
				infoHTML += '<section>';
				infoHTML += '<span>*</span>';
				infoHTML += '<label>个人简介</label>';
				infoHTML += '<input type="text" style="width:350px;height:280px;" placeholder="';
				infoHTML += form.introduction;
				infoHTML += '" name="userintroduction" />';
				infoHTML += '</section>';
				infoHTML += '<input type="submit" value="确定修改" />';
				infoHTML += '</form>';
				infoHTML += '</dd>';
				infoHTML += '</dl>';

				$('.content').html(infoHTML);

				$('.content').find('form').validate({
					submitHandler: function(item) {
						var newItem = form;

						//数据更新
						const name 		  = $(item).find('input[name=username]').val();
						const sex		  = $(item).find('input[name=sex]').val();
						const address 	  = $(item).find('input[name=address]').val();
						const age 		  = $(item).find('input[name=age]').val();
						const phoneNumber = $(item).find('input[name=telNumber]').val();
						const introduction = $(item).find('input[name=userintroduction]').val();

						newItem.name     	 = name != '' ? name : newItem.name;
						newItem.sex     	 = sex != '' ? sex : newItem.sex;
						newItem.address      = address != '' ? address : newItem.address;
						newItem.age     	 = age != '' ? age : newItem.age;
						newItem.phoneNumber  = phoneNumber != '' ? phoneNumber : newItem.phoneNumber;
						newItem.introduction = introduction != '' ? introduction : newItem.introduction;

						if (newItem != undefined) {
							$.ajax({
								type: 'PUT',
								url: 'http://localhost:5000/api/teacher/' + data.id,
								headers: {
									'Content-Type': 'application/json'
								},
								data: JSON.stringify(newItem),
								dataType: 'json',
								success: function(subItem) {
									if (subItem > 0) {
										toastr.success('更新教师成功!');
									}
								}
							});
						} else {
							toastr.success("更新教师失败!");
						}

					}
				});	
			}
		});
	}
}

//查询已选课程
function renderMyCourse(data) {
	if (data.type === 0) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/student/' + data.id,
			dataType: 'json',
			success: function(form) {
				const courseArray = form.courseID.split(",");

				$.ajax({
					type: 'GET',
					url: 'http://localhost:5000/api/course',
					dataType: 'json',
					success: function(course) {
						course.sort(sortByTime);

						var infoHTML = '';

						infoHTML += '<dl class="table_list">';	
						infoHTML += '<dt>';
						infoHTML += '<h1>';
						infoHTML += '<em></em>';
						infoHTML += '已选课程';	
						infoHTML += '</h1>';	
						infoHTML += '</dt>';	
						infoHTML += '<dd>';	
						infoHTML += '<form>';
						infoHTML += '<div class="filter_actions">';	
						infoHTML += '<input type="checkbox" />';	
						infoHTML += '<span>全选</span>';
						infoHTML += '<a class="delete_all"  target="_parent">删除</a>';	
						infoHTML += '</div>';		
						infoHTML += '<ul>';

						courseArray.map(function(courseItem) {
							course.map(function(item) {
								if (item.id == courseItem) {
									infoHTML += '<li>';		
									infoHTML += '<input type="checkbox" name="r" value="';
									infoHTML += item.id;
									infoHTML += '" />';
									infoHTML += '<div>';
									infoHTML += '<div>';
									infoHTML += '<h3>';
									infoHTML += '<a href="javascript:void(0);" target="_parent">';
									infoHTML += item.name;
									infoHTML += '</a>';
									infoHTML += '</h3>';
									infoHTML += '<span>';
									infoHTML += '创建时间';
									infoHTML += item.uploadTime.replace(/T/, ' ');
									infoHTML += '</span>';
									infoHTML += '</div>';
									infoHTML += '<div>';
									infoHTML += '课程人数：';
									infoHTML += item.studentNumber;
									infoHTML += '</div>';
									infoHTML += '</div>';
									infoHTML += '</li>';
								}
							});
						});

						infoHTML += '</ul>';
						infoHTML += '</form>';
						infoHTML += '</dd>';
						infoHTML += '</dl>';

						$('.content').html(infoHTML);

						$('.delete_all').click(function() {
							var r=document.getElementsByName("r"); 
								var newform = form;
								for(var i=0;i<r.length;i++){
									if(r[i].checked){
										const courseArray = newform.courseID.split(",");
										var newCourse = '';

										courseArray.map(function(courses) {
											if (courses != r[i].value) {
												newCourse += courses;
												newCourse += ',';
											}
										});

										newCourse = newCourse.substring(0,newCourse.length-1);
										newform.courseID = newCourse;
										
										$.ajax({
											type: 'PUT',
											url: 'http://localhost:5000/api/student/' + session.id,
											headers: {
												'Content-Type': 'application/json'
											},
											data: JSON.stringify(newform),
											dataType: 'json',
											success:function(subItem){
												if (subItem > 0) {
													toastr.success("删课成功!");
													renderMyCourse(session);
												}
												else{
													toastr.success("删课失败！");
												}
											}
										});
									}
								}
						});
					}
				});
			}
		});
	}else{
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/course',
			dataType: 'json',
			success: function(form) {
				var course_list = [];

				form.map(function(courseItem) {
					if (courseItem.teacherID == data.id) {
						course_list.push(courseItem);
					}
				});

				// 构建HTML
				
					course_list.sort(sortByTime);

					var infoHTML = '';

						infoHTML += '<dl class="table_list">';	
						infoHTML += '<dt>';
						infoHTML += '<h1>';
						infoHTML += '<em></em>';
						infoHTML += '已上传课程';	
						infoHTML += '</h1>';	
						infoHTML += '</dt>';	
						infoHTML += '<dd>';	
						infoHTML += '<form>';
						infoHTML += '<div class="filter_actions">';	
						infoHTML += '<input type="checkbox" />';	
						infoHTML += '<span>全选</span>';
						infoHTML += '<a class="delete_all"  target="_parent">删除</a>';	
						infoHTML += '</div>';		
						infoHTML += '<ul>';
					
						course_list.map(function(item){
								
									infoHTML += '<li>';		
									infoHTML += '<input type="checkbox" name="r" value="';
									infoHTML += item.id;
									infoHTML += '" />';
									infoHTML += '<div>';
									infoHTML += '<div>';
									infoHTML += '<h3>';
									infoHTML += '<a href="javascript:void(0);" target="_parent">';
									infoHTML += item.name;
									infoHTML += '</a>';
									infoHTML += '</h3>';
									infoHTML += '<span>';
									infoHTML += '创建时间';
									infoHTML += item.uploadTime.replace(/T/, ' ');
									infoHTML += '</span>';
									infoHTML += '</div>';
									infoHTML += '<div>';
									infoHTML += '课程人数：';
									infoHTML += item.studentNumber;
									infoHTML += '</div>';
									infoHTML += '</div>';
									infoHTML += '</li>';	
						});

						infoHTML += '</ul>';
						infoHTML += '</form>';
						infoHTML += '</dd>';
						infoHTML += '</dl>';

						$('.content').html(infoHTML);

						$('.delete_all').click(function() {
							var r=document.getElementsByName("r"); 
								var newform = form;
								for(var i=0;i<r.length;i++){
									if(r[i].checked){
										
										$.ajax({
											type: 'DELETE',
											url: 'http://localhost:5000/api/course/' + r[i].value,
											dataType: 'json',
											success:function(subItem){
												if (subItem > 0) {
													toastr.success("删课成功!");
													renderMyCourse(session);
												}
												else{
													toastr.success("删课失败！");
												}
											}
										});
									}
								}
						});
			}
		});
	}
}

//密码修改
function renderMyPassword(data) {
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
				infoHTML += '修改密码';	
				infoHTML += '</h1>';	
				infoHTML += '</dt>';	
				infoHTML += '<dd>';	
				infoHTML += '<form>';	
				infoHTML += '<section>';	
				infoHTML += '<label>登录账号</label>';	
				infoHTML += '<div>demo</div>';	
				infoHTML += '</section>';	
				infoHTML += '<section>';	
				infoHTML += '<label>新密码</label>';	
				infoHTML += '<input type="text" placeholder="新密码" name="username" />';	
				infoHTML += '</section>';	
				infoHTML += '<section>';	
				infoHTML += '<label>重复密码</label>';	
				infoHTML += '<input type="text" placeholder="重复密码" name="username" />';	
				infoHTML += '</section>';	
				infoHTML += '<input type="submit" value="保存" />';	
				infoHTML += '</form>';	
				infoHTML += '</dd>';	
				infoHTML += '</dl>';	
				

				$('.content').html(infoHTML);

				$('.content').find('form').validate({
					submitHandler: function(item) {
						var newItem = form;

						//数据更新
						const password 		  = $(item).find('input[name=username]').val();
					
						newItem.password     	= password != '' ? password : newItem.password;
	
						if (data != undefined) {
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
										toastr.success('更改密码成功!');
									}
								}
							});
						} else {
							toastr.success("更改密码失败!");
						}

					}
				});			
			}
		});
	}else{
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/teacher/' + data.id,
			dataType: 'json',
			success: function(form) {
				var infoHTML = '';

				infoHTML += '<dl class="form_list">';	
				infoHTML += '<dt>';	
				infoHTML += '<h1>';	
				infoHTML += '<em></em>';	
				infoHTML += '修改密码';	
				infoHTML += '</h1>';	
				infoHTML += '</dt>';	
				infoHTML += '<dd>';	
				infoHTML += '<form>';	
				infoHTML += '<section>';	
				infoHTML += '<label>登录账号</label>';	
				infoHTML += '<div>demo</div>';	
				infoHTML += '</section>';	
				infoHTML += '<section>';	
				infoHTML += '<label>新密码</label>';	
				infoHTML += '<input type="text" placeholder="新密码" name="username" />';	
				infoHTML += '</section>';	
				infoHTML += '<section>';	
				infoHTML += '<label>重复密码</label>';	
				infoHTML += '<input type="text" placeholder="重复密码" name="username" />';	
				infoHTML += '</section>';	
				infoHTML += '<input type="submit" value="保存" />';	
				infoHTML += '</form>';	
				infoHTML += '</dd>';	
				infoHTML += '</dl>';	
				

				$('.content').html(infoHTML);

				$('.content').find('form').validate({
					submitHandler: function(item) {
						var newItem = form;

						//数据更新
						const password 		  = $(item).find('input[name=username]').val();
					
						newItem.password     	= password != '' ? password : newItem.password;
	
						if (data != undefined) {
							$.ajax({
								type: 'PUT',
								url: 'http://localhost:5000/api/teacher/' + data.id,
								headers: {
									'Content-Type': 'application/json'
								},
								data: JSON.stringify(newItem),
								dataType: 'json',
								success: function(subItem) {
									if (subItem > 0) {
										toastr.success('更改密码成功!');
									}
								}
							});
						} else {
							toastr.success("更改密码失败!");
						}

					}
				});			
			}
		});
	}
}
//排序
function sortByTime(a, b) {
	return Date.parse(b.courseTime.replace(/T/, ' ')) - Date.parse(a.courseTime.replace(/T/, ' '));
}
//获取当前时间
function getTime(date)
{
    if(date == null)
    {
        date = new Date();
    }
    var y = date.getFullYear();
    var M = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var html = y + "-";
    if(M < 10)
    {
        html += "0";
    }
    html += M + "-";
 
    if(d < 10)
    {
        html += "0";
    }
    html += d + " ";
    if(h < 10)
    {
        html += "0";
    }
    html += h + ":";
    if(m < 10)
    {
        html += "0";
    }
    html += m + ":";
    if(s < 10)
    {
        html += "0";
    }
    html += s;
    return html;
}