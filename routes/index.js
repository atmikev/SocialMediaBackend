const express = require('express');
const router = express.Router();
const axios = require('axios');

const twitterURL = "https://takehome.io/twitter"
const facebookURL = "https://takehome.io/facebook"
const instagramURL = "https://takehome.io/instagram"

/* 
Get all the social media info available
Params:
@param callbackURL - Called when we receive data from social media sites
@param pollInterval - How often to check social media sites (in seconds)
*/
router.get('/', async function(req, res, next) {
    const params = req.params

    let data = {};
    
    try {
      const intagramResponse = await axios.get(instagramURL)
      data.instagram = intagramResponse.data;
      console.log(intagramResponse.data);
    } catch (e) {
      data.instagram = [];
      console.log(e);
    }
    
    try {
      const facebookResponse = await axios.get(facebookURL)
      data.facebook = facebookResponse.data;
      console.log(facebookResponse.data);
    } catch (e) {
      data.facebook = [];
      console.log(e);
    }

    try{
      const twitterResponse = await axios.get(twitterURL)
      data.twitter = twitterResponse.data;
      console.log(twitterResponse.data);
    } catch (e) {
      data.twitter = [];
      console.log(e);
    }

    res.json(data);      
  
});

module.exports = router;
