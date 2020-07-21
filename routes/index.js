const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', { title: 'AARD_V1 API Server' });
  });
module.exports = router;
