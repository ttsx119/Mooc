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