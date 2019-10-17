const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const path = require('path');
const compression = require("compression");

const app = express();

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) return false;
  return compression.filter(req, res);
}

app.use(compression({
  level: 2,               
  filter: shouldCompress, 
}));

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});