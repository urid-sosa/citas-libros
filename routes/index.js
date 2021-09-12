const express = require('express');

const router = express.Router();

const UsersController = require('../controllers/UsersController');
const CommentariesController = require('../controllers/CommentariesController');

module.exports = function(){
    router.post('/user', UsersController.add);
    router.get('/user', UsersController.list);
    router.get('/user/:id', UsersController.show);
    router.put('/user/:id', UsersController.update);
    router.delete('/user/:id', UsersController.delete);

    router.post('/commentary', CommentariesController.add);
    router.get('/commentary', CommentariesController.list);
    router.get('/commentary/:id', CommentariesController.show);
    router.delete('/commentary/:id', CommentariesController.delete);

    return router;
}