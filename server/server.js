// 引入依赖
const express = require('express');
const userRotuer = require('./user');

// 新建app
const app = express();
// use()设置前置路由
app.use('/user', userRotuer);

app.listen(9093, () => {
  console.log('Node app start at port 9093');
});
