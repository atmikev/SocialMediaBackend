const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function(req, res, next) {
    
    const endpoints = [
      {
        name: "instagram",
        url: "https://takehome.io/instagram"
      },
      {
        name: "facebook",
        url: "https://takehome.io/facebook"
      },
      {
        name: "twitter",
        url: "https://takehome.io/twitter"
      }
    ];
    
    let data = {};

    for (endpoint of endpoints) {
      try {
        const response = await axios.get(endpoint.url);
        console.log(response.data);
        data[`${endpoint.name}`] = response.data;
      }catch(e){
        data[`${endpoint.name}`] = [];
        console.log(e);
      }
    }
  
    res.json(data);      
  
});

module.exports = router;
