// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');
// var app = express();

// app.use(bodyParser.json());
// //指定静态资源目录
// //app.use(express.static('public'));

// var cmd=require('node-cmd');     
// app.get('/', (req, res, next) => {
//     res.render('index');
// });
// cmd.get( 'curl -H "Content-type:application/json" -H "authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTcwODY3ODUsInVzZXJuYW1lIjoiNDY4MTA5MzlAcXEuY29tIiwiYXBpa2V5IjoiNWE2NzYzMzEyOTJkMzcwMDEzYWUxMWQwIiwicm9sZSI6MiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTUxNzA1MDc4NX0.daZZaqMA8yHqWoK-uTITzmtZikydYZu-k5NnDXXq7Mg" -X POST --data \'{"id":"5a676366f3f0cc0033f42e52","func":"queryUser","parameter":["aa"],"account":"5a6c5bc64a29cf003361c4eb","method":"query"}\' https://baas.ink.plus/api/chain-code/call',        
//     function(err, data, stderr){
//         console.log('the current working dir is : ',data);
//         console.log(JSON.parse('[' + JSON.parse(data).message + ']')[0]);
//     });
// app.post('/api/contracts', (req, res, next) => {
//     const body = req.body;
//     console.log('req:' + body.tags);
//     cmd.get( 'curl -H "Content-type:application/json" -H "authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTcwODY3ODUsInVzZXJuYW1lIjoiNDY4MTA5MzlAcXEuY29tIiwiYXBpa2V5IjoiNWE2NzYzMzEyOTJkMzcwMDEzYWUxMWQwIiwicm9sZSI6MiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTUxNzA1MDc4NX0.daZZaqMA8yHqWoK-uTITzmtZikydYZu-k5NnDXXq7Mg" -X POST --data \'{"id":"5a676366f3f0cc0033f42e52","func":"queryUser","parameter":["aa"],"account":"5a6c5bc64a29cf003361c4eb","method":"query"}\' https://baas.ink.plus/api/chain-code/call',        
//     function(err, data, stderr){
//         console.log('the current working dir is : ',data);
//         //return res.json(data);        
//     });
    
// });
// app.listen(8080);
// console.log('app started');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.post('/process_post', urlencodedParser, function (req, res) {
  var cmd=require('node-cmd'); 
  cmd.get( 'curl -H "Content-type:application/json" -H "authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTcxMzAxMTgsInVzZXJuYW1lIjoiMTczOTM5OTYzOEBxcS5jb20iLCJhcGlrZXkiOiI1YTZjNWNkZjI5MmQzNzAwMTIxYTlkMTciLCJyb2xlIjoyLCJpc0FjdGl2YXRlZCI6dHJ1ZSwiaWF0IjoxNTE3MDk0MTE4fQ.TlKpkOIHguBba-PR7DSjf4mcBQIBl69QcA79YghQMGA" -X POST --data \'{"id":"5a6c5d1d4a29cf003361c4f4","func":"addAsset","parameter":["coin","string","dollar","int","2","aa"],"account":"5a6c5d654a29cf003361c4f6","method":"invoke"}\' https://baas.ink.plus/api/chain-code/call',        
    function(err, data, stderr){
        console.log('the current working dir is : ',data);
        res.end(data);
        //console.log(JSON.parse('[' + JSON.parse(data).message + ']')[0]);
    });
   // 输出 JSON 格式
  //  var response = {
  //      "test":"aaaa"
  //  };
  //  console.log(response);
  //  res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})