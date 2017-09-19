const express = require('express')
const router = express.Router();
const database = require('../db/knex')

router.get('/tripineer_user' ,function(request, response){
  database('tripineer_user')
    .then(function(data){
      response.json(data)
    })
})

router.get('/tripineer_user/:id', function(request, response){
  let id = request.params.id;
  database('tripineer_user').select().where('id', id)
    .then(function(data){
      response.json(data)
    })
})

module.exports = router