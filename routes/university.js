const express = require('express')
const router = express.Router();
const University = require('../services/modals/University');
const verifyToken = require('../services/middleware/verify-token');

router.get('/listUniversity',verifyToken,(req,res)=>{
  University.find({})
    .exec()
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.json(err);
    })
});

router.post("/universitySearch" ,(req,res)=>{
  const {search_name} = req.body;
  University.find({ "universityName" : { $regex: search_name, $options: 'i'}})
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    res.json(err)
  })

});

module.exports = router;
