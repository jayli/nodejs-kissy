
var S = require('../lib/kissy').KISSY;

S.use('sizzle',function(S){
	S.log(S.one('body div'));
});
