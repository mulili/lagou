// 引入依赖
const express = require('express');
const mongoose = require('mongoose');
// 链接mongo,并使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
  console.log('mongo connect success');
});
// 新建app
const app = express();
// 类似于mysql, mongo 里有文档 、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: String, require: true }
}));

User.create({
  user: 'yuhui',
  age: 20
}, (err, doc) => {
  if (!err) {
    console.log(doc);
  } else {
    console.log(err);
  }
});
User.remove({ age: 18 }, (err, doc) => {
  if (!err) {
    console.log(doc);
  } else {
    console.log(err);
  }
});
User.update({ user: 'yuhui' }, { age: 18 }, (err, doc) => {
  if (!err) {
    console.log(doc);
  } else {
    console.log(err);
  }
});
app.get('/', (req, res) => {
  res.send('<h2>Hello</h2>');
});

app.get('/data', (req, res) => {
  User.findOne({ user: 'yuhui' }, (err, doc) => {
    res.json(doc);
  });
});

app.listen(9093, () => {
  console.log('Node app start at port 9093');
});
