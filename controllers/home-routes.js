const { Sequelize } = require('sequelize/types');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Admin, NFP, Volunteer } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/volunteer', (req, res) => {
    res.render('/volunteers');
});

router.get('/admin', (req, res) => {
    res.render('admin');
})

router.get('/partners', (req, res) => {
    res.render('partner-nfp');
});

router.get('/admin', (req, res) => {

});

module.exports = router;