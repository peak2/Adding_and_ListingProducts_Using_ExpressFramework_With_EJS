const path = require('path');
const express = require('express');
const adminData = require('./admin')
const router = express.Router();


router.get('/', (req, res, next)=> {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        price: '$20.25', 
        description: 'A very interesting book, read to us by Mrs Bello when i was in JSS1', 
        path:'/',   //This path is passed to main-layout.pug to check for active page, wch is defined in main.css active class 
    })
    //Default price and description value does not work for handlebars here, i had to copy it to admin.js where i have all the the products
    //but the two can be put here for pug
})


module.exports = router;



// app.set('views', path.join(__dirname, "..", 'views')); 
// app.use(express.static(path.join(__dirname, "..", 'public')));