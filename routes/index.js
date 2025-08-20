const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/loja', (req, res) => res.render('loja'));
router.get('/vip', (req, res) => res.render('vip'));

module.exports = router;
