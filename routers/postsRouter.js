// importiamo express
const express = require('express');
// impostiamo il router
const router = express.Router();
// importiamo la logica delle rotte
const controller = require('../controllers/postsController');

const { index, show, store, update, destroy } = controller;

// rotta index
router.get('/', index);


// rotta show
router.get('/:id', show);

// rotta store
router.post('/', store);

// rotta update
router.put('/:id', update);

// rotta modify
router.patch('/:id', (req, res) => {
    res.send('modify');
});

// rotta destroy
router.delete('/:id', destroy);

module.exports = router;

