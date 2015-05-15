module.exports = function(app) {
  var express = require('express');
  var boardsRouter = express.Router();

  var boards = [
    {
      id: 1,
      title: 'Board 1',
      lists: [1,2]
    },
    {
      id: 2,
      title: 'Board 2',
      lists: [3,4]
    },
    {
      id: 3,
      title: 'Board 3',
      lists: [5,6]
    },
    {
      id: 4,
      title: 'Board 4',
      lists: [7,8]
    }
  ];

  boardsRouter.get('/', function(req, res) {
    res.send({
      'boards': boards
    });
  });

  boardsRouter.post('/', function(req, res) {
    var body = req.body;
    boards.push(body);
    res.status(201).send(body);
  });

  boardsRouter.get('/:id', function(req, res) {
    var board = boards[req.params.id-1];
    res.send({
      'board': board
    });
  });

  boardsRouter.put('/:id', function(req, res) {
    res.send({
      'boards': {
        id: req.params.id
      }
    });
  });

  boardsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/boards', boardsRouter);
};
