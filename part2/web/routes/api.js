var express = require('express');
var router = express.Router();

// ./api/user/가 됨
// ./api는 app.js에 적음
router.get('/user/:id', function(req, res){
  // req.query ?오는 걸 쿼리로 받을 수 있음
  // req.params
  // req.payload
  const id = req.params.id;
  const obj = {
    name: 'John',
    age: 30,
    job: 'developer',
    city: 'New York'
  };
  res.json(obj);
  // res.render는 템플릿이, res.send는 텍스트가 res.json은 json형태가 보내짐
});

module.exports = router;
