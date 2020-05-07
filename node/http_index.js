var http=require('http')
// console.log("hello mm")
http.createServer((request, response)=>{
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('meimei')
}).listen(8888)
console.log('开启服务器')