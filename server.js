const express = require('express');
const cors = require('cors');

const PORT = 3000;
const HOST = 'http://localhost';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:1234',
  })
);

const users = [
  { id: 123456, login: 'john@admin.com', rules: 'admin' },
  { id: 122256, login: 'eric@admin.com', rules: 'user' },
  { id: 123356, login: 'james@admin.com', rules: 'admin' },
  { id: 124456, login: 'volly@admin.com', rules: 'user' },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
  // res.send(users);
});

app.post('/', (req, res) => {
  // try {
  //     const { data } = req.body;
  //     if (data) {
  //         const user = {
  //             id: Math.floor(Math.random() * 1000000),
  //             ...data
  //         }
  //         users.push(user)
  //         res.status(200).send("user added")
  //     }
  // } catch (e) {
  //     res.status(500).send(e)
  // }
  res.send('Hello World!');
});

app.put('/', (req, res) => {
  res.send('Hello World!');
});

app.patch('/', (req, res) => {
  res.send('Hello World!');
});

app.delete('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${HOST}:${PORT}`);
});
