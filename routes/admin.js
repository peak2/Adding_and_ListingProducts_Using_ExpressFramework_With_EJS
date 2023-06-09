const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next)=> {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path:'/admin/add-product',  //This path is passed to main-layout.pug to check for active page, wch is defined in main.css active class  
    })
})

router.post('/add-product', (req, res, next)=> {
    products.push({title: req.body.title})
    res.redirect('/')
})


// module.exports = router;
exports.routes = router;
exports.products = products;