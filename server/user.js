
const express = require('express');
const utils = require('utility');

const Router = express.Router();
const model = require('./model');

const User = model.getModel('user');

// 过滤返回的数据
const _filter = { pwd: 0, __v: 0 };

Router.get('/list', (req, res) => (
  User.find({}, (err, doc) => (
    res.json(doc)
  ))
));
// 密码加盐
const md5Pwd = pwd => utils.md5(utils.md5(`${pwd}63235#%^%&^*&fkorsmkfmsf@!#@#$34234`));
// 用户登录
Router.post('/login', (req, res) => {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, (err, doc) => {
    if (!doc) {
      return res.json({ code: 1, msg: '用户名或密码不正确' });
    }
    res.cookie('userId', doc._id);
    return res.json({ code: 0, data: doc });
  });
});
// 用户注册
Router.post('/register', (req, res) => {
  const { user, pwd, type } = req.body;
  User.findOne({ user }, (err, doc) => {
    if (doc) {
      return res.json({ code: 1, msg: '用户名重复' });
    }
    // 为了拿到注册之后返回的id
    const userModel = new User({ user, pwd: md5Pwd(pwd), type });
    return userModel.save((e, d) => {
      if (e) {
        return res.json({ code: 1, msg: '后台出错了' });
      }
      /* eslint-disable */
      const { user, type, _id } = d;
      /* eslint-enable */
      res.cookie('userId', _id);
      return res.json({ code: 0, data: { user, type, _id } });
    });
  });
});

// 清除所有数据
// User.remove({}, () => {});
// 查询用户 cookie
Router.get('/info', (req, res) => {
  const { userId } = req.cookies;
  if (!userId) {
    return res.json({ code: 1 });
  }
  User.findById(userId, _filter, (err, doc) => {
    if (err) {
      return res.json({ code: 1, msg: '后台出错了' });
    }
    if (doc) {
      return res.json({ code: 0, data: doc });
    }
  });
});

module.exports = Router;
