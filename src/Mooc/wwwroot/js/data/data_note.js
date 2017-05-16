var noteSize = 0;
var session = {
	id: '130708119',
	name: 'Demo',
	type: 0
};


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


$('form').validate({
	submitHandler: function(form) {
	
		$.ajax({
			type: 'POST',
			url: 'http://localhost:5000/api/note',
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify({
				id: noteSize + 1,
				noterID: session.id,
				content: $('textarea').val(),
				noteTime: getTime(new Date())
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
});
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