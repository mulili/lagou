// 引入依赖
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./user');
// 新建app
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// use()设置前置路由
app.use('/user', userRouter);

app.listen(9093, () => {
  console.log('Node app start at port 9093');
});
