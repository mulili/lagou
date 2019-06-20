const mongoose = require('mongoose');

// 链接mongo,并使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';

mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('mongo connect success');
});

const modles = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    // 头像
    avatar: { type: String },
    // 个人简介或职位简介
    desc: { type: String },
    // 职位名称
    title: { type: String },
    // 如果是 Boss，额外的两个字段
    company: { type: String },
    money: { type: String }

  },
  chat: {

  }
};
// 类似于mysql, mongo 里有文档 、字段的概念
Object.keys(modles).map(m => (
  mongoose.model(m, new mongoose.Schema(modles[m]))
));

module.exports = {
  getModel: name => mongoose.model(name)
};
