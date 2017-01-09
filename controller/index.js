var express = require('express');
var router = express.Router();

router.post('/', total);

function total(req, res, next) {
  if (req.body){
    if (req.body.itemList){
      var itemListSplit = req.body.itemList.split(',');
      res.send(200);
    }
    res.status(400).json({'Reason': 'Bad Request missing item list'})
  }
  res.status(400).json({'Reason': 'Missing body'})
}
module.exports = router;
