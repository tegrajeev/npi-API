const https = require('https');
const http = require('http');
const fs = require('fs-extra');
const app = require('./app');

const port = process.env.PORT|| 3032;

const options = {
    pfx: fs.readFileSync('https/hwssl2022.pfx'),
    passphrase: 'goteg@123'
    //cert: fs.readFileSync('https/48b075a0051e3944.crt')
  };
  
  const server = https.createServer(options, app);
  //const server = http.createServer(app);
  
  server.listen(port, () => console.log(`Listening on port ${port}...`));


module.exports = server;
