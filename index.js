require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { allowOrigin } = require('./middleware');

const { PORT, DB_URL } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowOrigin);

mongoose.connect(`${DB_URL}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).catch(({ message }) => console.log('Ошибка:', message));

app.use('/order', require('./routes/orders'));

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});