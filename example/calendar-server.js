
var S = require('../lib/kissy').KISSY;

http = require('http'),

S.add('calendar', {
    fullpath: 'http://a.tbcdn.cn/s/kissy/1.1.5/calendar/calendar-pkg.js',
	require:['core']
}).add('skin',{
	fullpath:'http://a.tbcdn.cn/s/kissy/1.1.5/calendar/default.css'	
}).use('calendar,skin',function(S) {

	document.body.innerHTML = '<div id="J_calendar"></div>';
	var docType = '<!DOCTYPE html>';

	new S.Calendar('#J_calendar');
	var head = '<head>' + document.getElementsByTagName('head')[0].innerHTML + '</head>';
	var out = docType + '<html>'+head+'<body>' + S.one('body').html() + '</body></html>';

	http.createServer(function (req, res) {

		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Accept-Charset':'utf-8'}
		);
		res.write(out);
		res.close();

	}).listen(81);

});

