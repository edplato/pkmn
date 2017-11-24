const express = require('express');
const app = express();

app.use(express.static((__dirname + '/app')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, () => {
  console.log('SERVER STARTED: Listening on port: 3000');
});