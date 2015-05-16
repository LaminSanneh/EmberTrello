module.exports = function(app) {
  var express = require('express');
  var listsRouter = express.Router();

  var lists = app.locals.lists = [
    {
      id: 1,
      title: 'List 1',
      cards: [1,2]
    },
    {
      id: 2,
      title: 'List 2',
      cards: [3,4]
    },
    {
      id: 3,
      title: 'List 3',
      cards: [5,6]
    },
    {
      id: 4,
      title: 'List 4',
      cards: [7,8]
    },
    {
      id: 5,
      title: 'List 5',
      cards: [9,10]
    },
    {
      id: 6,
      title: 'List 6',
      cards: [11,12]
    },
    {
      id: 7,
      title: 'List 7',
      cards: [13,14]
    },
    {
      id: 8,
      title: 'List 8',
      cards: [15]
    }
  ];

  var cards = app.locals.cards = [
    {
      id: 1,
      title: 'Card 1',
      list: 1,
      sortOrder: 1
    },
    {
      id: 2,
      title: 'Card 2',
      list: 1,
      sortOrder: 2
    },
    {
      id: 3,
      title: 'Card 3',
      list: 2,
      sortOrder: 1
    },
    {
      id: 4,
      title: 'Card 4',
      list: 2,
      sortOrder: 2
    },
    {
      id: 5,
      title: 'Card 5',
      list: 3,
      sortOrder: 1
    },
    {
      id: 6,
      title: 'Card 6',
      list: 3,
      sortOrder: 2
    },
    {
      id: 7,
      title: 'Card 7',
      list: 4,
      sortOrder: 1
    },
    {
      id: 8,
      title: 'Card 8',
      list: 4,
      sortOrder: 2
    },
    {
      id: 9,
      title: 'Card 9',
      list: 5,
      sortOrder: 2
    },
    {
      id: 10,
      title: 'Card 10',
      list: 5,
      sortOrder: 1
    },
    {
      id: 11,
      title: 'Card 11',
      list: 6,
      sortOrder: 2
    },
    {
      id: 12,
      title: 'Card 12',
      list: 6,
      sortOrder: 1
    },
    {
      id: 13,
      title: 'Card 13',
      list: 7,
      sortOrder: 1
    },
    {
      id: 14,
      title: 'Card 14',
      list: 7,
      sortOrder: 2
    },
    {
      id: 15,
      title: 'Card 15',
      list: 8,
      sortOrder: 1
    }
  ];

  listsRouter.get('/', function(req, res) {
    res.send({
      'lists': lists,
      'cards': cards
    });
  });

  listsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listsRouter.get('/:id', function(req, res) {
    var list = lists[req.params.id-1],
        listCards = cards.filter(function(item){
          return item.list == list.id;
        });
    res.send({
      'list': list,
      'cards': listCards
    });
  });

  listsRouter.put('/:id', function(req, res) {
    res.send({
      'lists': {
        id: req.params.id
      }
    });
  });

  listsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/lists', listsRouter);
};
