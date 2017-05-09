CKEDITOR.replace('editor');
var noteSize = 0;

$.ajax({
	type: 'GET',
	url: 'http://localhost:5000/api/note',
	dataType: 'json',
	success: function(note) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/student',
			dataType: 'json',
			success: function(studentList) {
				var studentName = '';
				var index 	 	= 0;
				var noteHTML 	= '';

				note.map(function(noteItem) {
					noteSize++;

					if (index < 7) {
						index++;

						studentList.map(function(student) {
							if (student.id == noteItem.noterID) {
								studentName = student.name;
							}
						});

						noteHTML += '<li>';
						noteHTML += '<p>';
						noteHTML += '<span>';
						noteHTML += studentName;
						noteHTML += '</span>';
						noteHTML += '<span>';
						noteHTML += noteItem.noteTime.replace(/T/, ' ');
						noteHTML += '</span>';
						noteHTML += '</p>';
						noteHTML += '<p>';
						noteHTML += noteItem.content;
						noteHTML += '</p>';
						noteHTML += '</li>';
					}
				});

				$('#content').find('ul').html(noteHTML);
			}
		})
	}
});

/*
$('form').validate({
	submitHandler: function(form) {
		var id = '';

		$.ajax({
			type: 'GET',
			url: 'http://localhost:5000/api/session',
			dataType: 'json',
			success: function(sessionItem) {
				id = sessionItem[0].id;
			}
		});

		$.ajax({
			type: 'POST',
			url: 'http://localhost:5000/api/note',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: noteSize + 1,
				noterID: id,
				content: $('textarea').val(),
				noteTime: Date.now()
			}),
			dataType: 'json',
			success: function(data) {
				if (data > 0) {
					toastr.success('添加成功!');
				} else {
					toastr.error('会话异常终止！');
				}
			}
		});
	}
});*/