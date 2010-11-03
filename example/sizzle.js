
require('../lib/kissy');

var S = KISSY;

S.use('sizzle',function(S){
	S.log(S.one('body div'));
});
