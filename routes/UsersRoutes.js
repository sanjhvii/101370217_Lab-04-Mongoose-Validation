const express = require('express');
const User = require('../models/Users');
const app = express();




app.post('/users', async (req, res) => {
  
    
    const user = new User(req.body);
    // console.log(user)
    
    try {
      await user.save((err) => {
        if(err){
          
          res.send(err)
        }else{
          res.send(user);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  module.exports = app