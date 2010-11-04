
var S = require('../lib/kissy').KISSY;

/**
 * 使用use add来启动程序 
 */
S.add('abc',function(S){
	S.a = 'add abc ok';	
});
S.use('abc',function(S){
	S.log(S.a);
});


/**
 * 引入外部文件
 */
S.add('a', {
    fullpath: 'a.js'
}).use('a', function(S) {
    S.log(S.a);
});


/**
 * 引入http外部文件
 */
S.add('calendar', {
    fullpath: 'http://a.tbcdn.cn/s/kissy/1.1.5/calendar/calendar-pkg.js'
}).use('calendar', function(S) {
    S.log('Calendar ok');
});

/**
 * 使用S.ready启动程序
 */
S.ready(function(S) {
    S.log('S.ready ok');
});


/**
 * 引入core
 */
S.use('core', function(S) {
    S.log('core ok');
});

/**
 * 引入内部模块ajax
 */
S.use('ajax', function(S) {
    S.log('ajax ok');
});

