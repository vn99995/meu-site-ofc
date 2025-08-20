const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Login'));
router.get('/logout', (req, res) => res.send('Logout'));

module.exports = router;
