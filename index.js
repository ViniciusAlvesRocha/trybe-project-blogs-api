const express = require('express');
// const User = require('./models/users');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userRouter = require('./routers/userRouter');

app.use('/user', userRouter);

app.listen(3000, () => {
  // console.log(User);
  console.log('ouvindo porta 3000!');
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
