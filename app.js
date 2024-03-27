const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const currentDateTime = new Date().toLocaleString();
  res.send(`<h1>Hello! I am Dhruvi. Current date and time: ${currentDateTime}</h1>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  //console.log(`API server listening on port ${port}`);
});
