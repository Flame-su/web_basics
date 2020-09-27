var crypto = require('crypto');
//var iconv = require("iconv-lite");
{
  var text = "\x7f";
  var textmd5 = crypto.createHash('md5').update(text).digest('hex');
  var textmd5utf8 = crypto.createHash('md5').update(text, 'utf-8').digest('hex');
  console.log(textmd5);
  console.log(textmd5utf8);
  console.log('---------7f')
}
{
  var text = "\xa2\x82\xbb`jv\x05\xfbI\xcd\x00\xbfN\x04\xc5\xbf\x84\xf1\x97\x810\x02|Y";
  var textmd5 = crypto.createHash('md5').update(text, 'ascii').digest('hex');
  var textmd5utf8 = crypto.createHash('md5').update(text, 'utf-8').digest('hex');
  // var rawStr = iconv.encode(text, 'gbk').toString('binary');
  var textmd5gbk = crypto.createHash('md5').update(text, 'gbk').digest('hex');
  console.log(textmd5);
  console.log(textmd5gbk); 
  console.log(textmd5utf8)
  // console.log(rawStr) 
  console.log('---------80')
}
{
  var text = "\xa2";
  var textmd5 = crypto.createHash('md5').update(text).digest('hex');
  var textmd5utf8 = crypto.createHash('md5').update(text, 'utf-8').digest('hex');
  console.log(textmd5);
  console.log(textmd5utf8);
  console.log('---------a2')  
}
