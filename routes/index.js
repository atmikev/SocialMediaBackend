const express = require('express');
const router = express.Router();
const axios = require('axios');

/* 
Get all the social media info available
Params:
@param callbackURL - Called when we receive data from social media sites
@param pollInterval - How often to check social media sites (in seconds)
*/
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
