
require('./kissy');

var S = KISSY;
/*
//it work
S.add('abc',function(S){
	S.a = '===============================';	
});
S.use('abc',function(S){
	S.log(S.a);
});
*/


/*
//it work
S.add('a', {
    fullpath: 'a.js'
}).use('a', function(S) {
    S.log(S.a);
});
*/

/*
//it work
S.add('a', {
    fullpath: 'http://taobao-wd.ns1.name/bachi/jayli/nodejs-kissy/a.js'
}).use('a', function(S) {
    S.log(S.a);
});
*/


/*
//程序不工作，因为这里没有domReady
*/
/*
S.add('a', {
    fullpath: 'a.js'
}).ready(function(S) {
    S.log(S.a);
});
*/

/*
//it work
S.use('ks-core', function(S) {
    //S.log(S);
});
*/

/*
//it work
S.use('ks-core,ajax', function(S) {
    S.log(S.getScript);
});
*/

/*
//it work
S.add('a', {
    fullpath: 'http://taobao-wd.ns1.name/bachi/jayli/nodejs-kissy/a.js',
	require:['ks-core']
}).use('a', function(S) {
    S.log(S);
});
*/

http = require('http'),

S.add('calendar', {
    fullpath: 'http://a.tbcdn.cn/s/kissy/1.1.5/calendar/calendar-pkg.js',
	require:['ks-core']
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

