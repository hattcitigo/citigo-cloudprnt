var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    msg:'hello'
});
var options = {
    hostname: 'localhost',
    port: 3000,
    method: 'POST',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};
var req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);
    console.log('HEADERS:', JSON.stringify(res.headers));

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY:', chunk);

    });

});
req.on('error', function (e) {
    console.log('Problem:', e.message);


});
req.write(postData);
req.end();