
const router = require('express').Router();
const sequelize = require('../config/connection');


const { Admin, NFP, Volunteer } = require('../models')//VolNFPs


router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('join');
});

//------------------------------------------------------------------------//
//////////////////////////USER GET INFO/////////////////////////////////////
//------------------------------------------------------------------------//

let formatPhoneNumber = (P) => {
    //Filter only numbers from the input
    let cleaned = ('' + P).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }; 
    return " "
  };


// personal page //
router.get('/volunteer/:id', (req, res) => {

    console.log('HOMEROUTES')
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
       // console.log(volunteer.phone_number)
        var num = formatPhoneNumber(volunteer.phone_number)
        console.log(num)
        volunteer.phone_number = num;
        volunteer.id =  req.params.id;
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
  

//------------------------------------------------------------------------//
//////////////////////////USER PUT INFO/////////////////////////////////////
//------------------------------------------------------------------------//

// personal page //
router.put('/volunteer/:id', (req, res) => {

    console.log('put', req.body, req.params)
    Volunteer.update(
        {where: {
            id: req.params.id
          }},
     {  first_name: req.body.userinfo.first_name,
        last_name: req.body.userinfo.last_name,
        email: req.body.userinfo.email,
        phone_number: req.body.userinfo.phone_number,
        bio: req.body.userinfo.bio,
        state: req.body.userinfo.state,
        city: req.body.userinfo.city
    }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        console.log(dbPostData)

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

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/volunteer/1', (req, res) => {
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