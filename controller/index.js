var express = require('express');
var router = express.Router();
var catalog = require('../data/catalog.json')
var _ = require('underscore')

router.post('/', total);

function total(req, res, next) {
  if (req.body){
    if (req.body.itemList){
      var itemListSplit = req.body.itemList.split(';');
      var subTotal = 0, price, value;
      itemListSplit.forEach(function(productCode){
        value = _.find(catalog.inventory, function (o) {
          return o.productCode == (productCode.toUpperCase());
        });
        if (value) {

          price = parseFloat(value.price);
          subTotal+=price
        } else {
          res.status(400).json({'Reason': 'Bad product Code'})
        }

      });
      if (subTotal) {

        var total = subTotal*1.0875
        total = Math.round(total * 100) / 100
        res.status(200).send('{"total":"'+JSON.stringify(total)+'"}');
      } else {
        res.status(400).json({'Reason': 'Missing item list'})
      }
    } else {
      res.status(400).json({'Reason': 'Invalid Request'})
    }
  }
  else {
      res.status(400).json({'Reason': 'Missing body'})
  }
}

module.exports = router;
