const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');

const PORT = 3000;
const HOST = 'http://localhost';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:1234',
  })
);

app.use('/', userRoutes.routes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${HOST}:${PORT}`);
});
