const express = require('express');
const path = require('path');

const app = express();
const PUBLIC = path.join(__dirname, '../../public');

app.use('/', express.static(PUBLIC));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('connected');
});
