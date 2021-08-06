var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://127.0.0.1:8000/api/items/')
      .then(response=>{
        // handle success
        res.render("menu", {title:"Wok Way", data: response.data})
      }).catch(
        error => {
          res.render("error", {"message": error.message, "error": {"stack": error.stack}})
        }
      )
});

module.exports = router;
