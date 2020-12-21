const router = require('express').Router();
const sequelize = require('../config/connection');
const { Admin, NFP, Volunteer } = require('../models')

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage')
});

router.get('/login', (req, res) => {

});

router.get('/signup', (req, res) => {

});

router.get('/dashboard', (req, res) => {

});

router.get('/partners', (req, res) => {

});

router.get('/admin', (req, res) => {

});

module.exports = router;