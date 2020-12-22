const router = require('express').Router();
const sequelize = require('../config/connection');
const { Admin, Volunteer, NFP, VolNFPs } = require('../models');



router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('join');
});

//////////////////////////PERSONAL PAGE/////////////////////////////////////

// personal page //
router.get('/volunteer/:id', (req, res) => {
    Volunteer.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'bio',
        'city',
        'state'
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }

        const volunteer = dbPostData.get({ plain: true });
  
        res.render('volunteers', {
          volunteer,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  


  ////////////////////////////////////////////////////////
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });






/////////////////////////////////////////////////////////////////////////////
router.get('/dashboard', (req, res) => {

});

router.get('/partners', (req, res) => {
    res.render('partner-nfp');
});

module.exports = router;