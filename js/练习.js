




var http = require('http');
http.createServer((resquest,response)=>{
    response.end('lalala')
}).listen(80,'192.168.12.83',()=>{
    console.log('开启成功');
})
