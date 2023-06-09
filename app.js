const express = require('express');
const path = require('path')

// const adminRoutes = require('./routes/admin.js')
const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const app = express();

app.set('view engine', 'pug');        
app.set('views', 'views')  //d first views is ur local views folder, housing ur handlebars, d second views is default, wch must not b
                           //changed suppose u use anoda name lyk template 4d folder, u will use it lyk dz: app.set('template', 'views')

// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))




app.use(shopRoutes);
// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);



app.use((req, res, next)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})    //The second 404 on dz line represents 404.pug
})


app.listen(3902, ()=>{
    console.log("app running on 3902");
}) 