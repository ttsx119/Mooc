function getId() {
	var url = window.location.href;

	if (url.indexOf("?") === -1) {
		window.location.href = 'index.html';
	}

	return url.substr(url.indexOf("?") + 1).split("=")[1];
}

$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/course/' + getId(),
	dataType: 'json',
	success: function(data) {
		if (data != undefined) {
			$('video').attr('src', '../../res/video/' + data.courseUrl);

			$.ajax({
				type: 'GET',
				url: 'http://localhost:5000/api/teacher/' + data.teacherID,
				dataType: 'json',
				success: function(item) {
					$('span:first-of-type').text('上课教师：' + item.name);
					$('span:last-of-type').text('简介：' + item.introduction);
				}
			});
		}
	}
});