const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.method === 'POST') {
    let body = '';
    req.on('end', ()=>{
      console.log(body);
      res.end(`<h1>Got the post request ${body}<h1>`)
    });
    req.on('data', (chunk)=>{
      body += chunk;
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
    <form method="POST">
      <input type="text" name="username">
      <button type="submit">Create User</button>
    </form>
  `);
  }
});

server.listen(5000);