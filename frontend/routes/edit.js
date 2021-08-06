var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET item listing. */
router.get('/', function(req, res, next) {
  axios.get('http://127.0.0.1:8000/api/items/')
      .then(response=>{
        res.render("edit", {title:"Wok Way", data: response.data})
      }).catch(
        error => {
          res.render("error", {"message": error.message, "error": {"stack": error.stack}})
        }
      )
});

router.post('/add', function (req, res) {
  console.log("ADD")
  const data = {name: req.body.addName, price: req.body.addPrice}
  console.log(data)
  axios.post('http://127.0.0.1:8000/api/items/', data)
  .then(reponse=>{
    axios.get('http://127.0.0.1:8000/api/items/')
    .then(response=>{
      res.render("edit", {title:"Wok Way", data: response.data})
    }).catch(
      error => {
        res.render("error", {"message": error.message, "error": {"stack": error.stack}})
      }
    )
  }).catch(
    error => {
      res.render("error", {"message": error.message, "error": {"stack": error.stack}})
    }
  )
})

router.post('/update', function (req, res) {
  console.log("UPDATE")
  const data = {id: req.body.itemId, name: req.body.updateName, price: req.body.updatePrice}
  console.log(data)

  axios.put('http://127.0.0.1:8000/api/items/' + data.id + '/', data)
  .then(reponse=>{
    axios.get('http://127.0.0.1:8000/api/items/')
    .then(response=>{
      res.render("edit", {title:"Wok Way", data: response.data})
    }).catch(
      error => {
        res.render("error", {"message": error.message, "error": {"stack": error.stack}})
      }
    )
  }).catch(
    error => {
      res.render("error", {"message": error.message, "error": {"stack": error.stack}})
    }
  )
})

router.post('/delete', function (req, res) {

  console.log("DELETE")
  const data = {id: req.body.itemId}
  console.log(data)
  axios.delete('http://127.0.0.1:8000/api/items/' + data.id + '/', data)
  .then(reponse=>{
    axios.get('http://127.0.0.1:8000/api/items/')
    .then(response=>{
      // handle success
      res.render("edit", {title:"Wok Way", data: response.data})
    }).catch(
      error => {
        res.render("error", {"message": error.message, "error": {"stack": error.stack}})
      }
    )
  }).catch(
    error => {
      res.render("error", {"message": error.message, "error": {"stack": error.stack}})
    }
  )

})


module.exports = router;
