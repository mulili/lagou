const mongoose = require('mongoose');

// 链接mongo,并使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';

mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
  console.log('mongo connect success');
});

// 类似于mysql, mongo 里有文档 、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: String, require: true }
}));
