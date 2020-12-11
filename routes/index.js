var express = require('express');
var router = express.Router();
var fs = require('fs');

var PATH ='./public/data/';

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.cookies.user){
    return res.render('l1/login',{ title: '登录' });
  } else {
    res.render('index', { title: '首页' });
  }
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/login', function(req, res, next) {
  res.render('l1/login', { title: '登录' });
});

router.get('/member-statistics', function(req, res, next) {
  res.render('h1/member-statistics', { title: '会员统计' });
});

router.get('/member-list', function(req, res, next) {
  res.render('h1/member-list', { title: '会员(静态)列表' });
});

router.get('/member-list1', function(req, res, next) {
  res.render('h1/member-list1', { title: '会员(动态)列表' });
});

router.get('/member-del', function(req, res, next) {
  res.render('h1/member-del', { title: '会员删除' });
});

router.get('/member-add', function(req, res, next) {
  res.render('h1/member-add', { title: '会员添加' });
});

router.get('/member-edit', function(req, res, next) {
  res.render('h1/member-edit', { title: '会员编辑' });
});

router.get('/member-password', function(req, res, next) {
  res.render('h1/member-password', { title: '会员编辑' });
});

router.get('/order-list', function(req, res, next) {
  res.render('o1/order-list', { title: '订单列表' });
});

router.get('/order-list1', function(req, res, next) {
  res.render('o1/order-list1', { title: '订单列表1' });
});

router.get('/order-add', function(req, res, next) {
  res.render('o1/order-add', { title: '添加订单' });
});

router.get('/multi-category', function(req, res, next) {
  res.render('f1/multi-category', { title: '多级分类' });
});


router.get('/main', function(req, res, next) {
  res.render('main', { title: '主界面' });
});

// router.get('/tuijian', function(req, res, next) {
//   if(!req.cookies.user){
//     return res.render('login',{});
//   }
//   res.render('tuijian', { });
// });

// router.get('/edit', function(req, res, next) {
//   if(!req.cookies.user){
//     return res.render('login',{});
//   }
//   var type = req.query.type;
//   if(type){
//     var obj = {};
//     switch(type){
//       case 'sanwen':
//         obj = {};
//         break;
//       case 'it':
//         obj = {};
//         break;
//       case 'manager':
//         obj = {};
//         break;
//       case 'cookies':
//         obj = {};
//         break;
//       default :
//         return res.send({
//           status:0,
//           info:'参数错误'
//         });
//       break;
//     }
//     fs.readFile(PATH + type + '.json', (err, data) => {
//       if (err) {
//         return res.send({
//           status:0,
//           info: 'fail.....'
//         });
//       }
//       var obj = JSON.parse(data.toString());
//       return res.render('edit', {
//         data: obj
//       });
//     });
//   }else {
//     return res.send({
//       status:0,
//       info: '参数错误'
//     });
//   }
// });

module.exports = router;
