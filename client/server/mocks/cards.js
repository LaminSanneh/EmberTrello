module.exports = function(app) {
  var express = require('express');
  var cardsRouter = express.Router();

  var cards = app.locals.cards || [];

  cardsRouter.get('/', function(req, res) {
    res.send({
      'cards': cards
    });
  });

  cardsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  cardsRouter.get('/:id', function(req, res) {
    res.send({
      'cards': {
        id: req.params.id
      }
    });
  });

  cardsRouter.put('/:id', function(req, res) {
    var card = cards.filter(function(item){
      return item.id == req.params.id;
    });
    card = card[0];

    var body = req.body;

    res.send({
      'card': card
    });
  });

  cardsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cards', cardsRouter);
};
