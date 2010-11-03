
require('../lib/kissy');

var S = KISSY;

S.use('calendar',function(S) {

	document.body.innerHTML = '<div id="J_calendar"></div>';
	var docType = '<!DOCTYPE html>';

	new S.Calendar('#J_calendar');
	var head = '<head>' + document.getElementsByTagName('head')[0].innerHTML + '</head>';
	var out = docType + '<html>'+head+'<body>' + S.one('body').html() + '</body></html>';

	S.log(out);

});

