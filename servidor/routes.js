const express = require('express');
const router = require('router');

router.get('/',(req,res) => { res.render('index.ejs');});

//app.get('/login',(req,res) => { res.end('<h1>Ingresar  Login</h1>');});
router.get('/',(req,res) => { res.render('login.ejs');});
router.get('*',(req,res) => { res.end('<h1>Ingresar  Login</h1>');});

module.exports = router;