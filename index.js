const math = require('./math.js');
 
const dns = require('dns');
const os = require('os');

var http = require('http');

const handleServer = function(req,response) {
  response.writeHead(200,
    {'Content-Type': 'text/html'});
    response.write(
    '<!doctype html><html><head></head>'+
'<body><h1>%s</h1></body></html>',req);
response.end();
}

var servidor=http.createServer(handleServer);
servidor.listen(8080);
console.log('Servidor web iniciado');
/*
console.log('s');
console.log(math.add(1,5));

dns.lookup('minvu.cl', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
*/

//console.log(os.cpus());
