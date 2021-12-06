const express = require('express');
// const models = require('./models');
// console.log(models);

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
const categoryRouter = require('./routers/categoryRouter');
const controllerPosts = require('./controller/controllerPosts');
const controllerUsers = require('./controller/controllerUsers');
const controllerCategories = require('./controller/controllerCategories');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);

app.listen(3000, () => {
  // console.log(User);
  console.log('ouvindo porta 3000!');
});

// route post:
app.post('/post',
controllerUsers.tokenExists,
controllerUsers.tokenIsValid,
controllerPosts.titleExists,
controllerPosts.contentExists,
controllerPosts.categoryIdExists,
controllerCategories.verifyCategorysExistsInDatabase,
controllerPosts.create);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
