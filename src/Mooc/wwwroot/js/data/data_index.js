// 请求分类数据并显示
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/classification',
	dataType: 'json',
	success: function(data) {
		var html  = '';
		var index = 0;

		data.map(function(superItem) {
			if (superItem.parentID === 0) {
				html += '<li>';
				html += '<div class="menu">';
				html += '<h2>';
				html += superItem.name;
				html += '<span></span>';
				html += '</h2>';

				data.map(function(item) {
					if (item.parentID === superItem.id) {
						data.map(function(subItem) {
							if (subItem.parentID === item.id) {
								index++;

								if (index < 8) {
									html += '<a href="';
									html += subItem.link;
									html += '" target="_parent">';
									html += subItem.name;
									html += '</a>';
								}
							}
						});
					}
				});

				html += '</div>';
				html += '<div class="menu_sub">';

				data.map(function(item) {
					if (item.parentID === superItem.id) {
						html += '<dl>';
						html += '<dt>';
						html += item.name;
						html += '</dt>';
						html += '<dd>';

						data.map(function(subItem) {
							if (subItem.parentID == item.id) {
								html += '<a href="';
								html += subItem.link;
								html += '" target="_parent">';
								html += subItem.name;
								html += '</a>';
							}
						});

						html += '</dd>';
						html += '</dl>';
					}
				});

				html += '</div>';
				html += '</li>';

				index = 0;
			}
		});

		$('aside').find('ul').html(html);
	}
});

// 热度排序函数
function sortByHot(a, b) {
	return b.studentNumber - a.studentNumber;
}

// 课程显示
$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/course',
	dataType: 'json',
	success: function(data) {
		data.sort(sortByHot);

		var hotIndex = 0;
		var hotHTML  = '';

		data.map(function(hotItem) {
			hotIndex++;

			if (hotIndex < 17) {
				if (hotIndex % 2 === 1) {
					hotHTML += '<li>';
				}

				hotHTML += '<div class="course_item">';
				hotHTML += '<div class="item_header">';
				hotHTML += '<a href="lesson.html?id=';
				hotHTML += hotItem.id;
				hotHTML += '" target="_parent">';
				hotHTML += hotItem.name;
				hotHTML += '</a>';
				hotHTML += '<span>';
				hotHTML += hotItem.category === 0 ? '[线上]' : '[线下]';
				hotHTML += '</span>';
				hotHTML += '</div>';
				hotHTML += '<span>';
				hotHTML += '<span>教师: </span>';
				hotHTML += hotItem.teacherID;
				hotHTML += '</span>';
				hotHTML += '<span>';
				hotHTML += '<span>时长: </span>';
				hotHTML += hotItem.duration;
				hotHTML += '</span>';
				hotHTML += '<span>';
				hotHTML += '<span>上课时间: </span>';
				hotHTML += hotItem.courseTime;
				hotHTML += '</span>';
				hotHTML += '<br />';
				hotHTML += '<span>';
				hotHTML += '<span>教师优势: </span>';
				hotHTML += hotItem.duration;
				hotHTML += '</span>';
				hotHTML += '</div>';

				if (hotIndex % 2 === 0) {
					hotHTML += '</li>';
				}
			}
		});

		hotHTML += '<a href="javascript:void(0);" target="_parent">查看更多</a>';

		$('.tab_body').find('ul:first-of-type').html(hotHTML);
	}
});