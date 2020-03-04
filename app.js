const express = require('express');
const app = express();

app.use((req, res, next)=>{
  let body = '';
  req.on('end', ()=>{
    const [key, value] = body.split('=');
    req.body = {name:value};
    next();
  })
  req.on('data',(chunk)=>{
    body += chunk;
  })
});

app.use((req, res, next)=>{
  if(req.body.name){
    return res.send('<h1>'+ req.body.name +'</h1>');
  }
  res.send(`
  <form method="POST">
    <input type="text" name="username">
    <button type="submit">Create User</button>
  </form>
`)
});


app.listen(5000);