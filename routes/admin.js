var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE 11",
      category:"mobile",
      description:"This is a good phone",
      image:"data:image/png;base64,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"
    },
    {
      name:"ONEPLUS 7T",
      category:"mobile",
      description:"This is a good phone",
      image:"data:image/png;base64,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"
    },
    {
      name:"SAMSUNG GALAXY A51",
      category:"mobile",
      description:"This is a good phone",
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGpHJkMWapm7GdA6NC2N37_VI3k76T_k2v7uVtX2J_pWnkDkgNvQldsh-_EoarcUpv4a9kC7Cpng&usqp=CAc"
    },
    {
      name:"OPPO F15",
      category:"mobile",
      description:"This is a good phone",
      image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSw1GFho7nq1qMTb9CCcL-Cyf-wYkl7nHjdwrasgAEyjyHqJvQPFnY9v87-OhygDkmA1_f4I8FfPQc&usqp=CAc"
    }
  ]
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-product',function(req,res){
  
})


module.exports = router;
