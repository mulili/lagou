const express = require('express');

const Router = express.Router();
const model = require('./model');

const User = model.getModel('user');

Router.get('/list', (req, res) => (
  User.find({}, (err, doc) => (
    res.json(doc)
  ))
));
// 用户注册
Router.post('/register', (req, res) => {
  console.log(req);
  const { user, pwd, type } = req.body;
  User.findOne({ user }, (err, doc) => {
    if (doc) {
      return res.json({ code: 1, msg: '用户名重复' });
    }
    return User.create({ user, pwd, type }, (e) => {
      if (e) {
        return res.json({ code: 1, msg: '后台出错了' });
      }
      return res.json({ code: 0 });
    });
  });
});

// 清除所有数据
// User.remove({}, () => {});
// 查询用户 cookie
Router.get('/info', (req, res) => res.json({ code: 1 }));

module.exports = Router;
