const router = require('express').Router();
const sequelize = require('../config/connection');


const { Admin, NFP, Volunteer } = require('../models')//VolNFPs


// router.get('/', (req, res) => {
//     res.render('homepage')
// });


// get all npfs for homepage
router.get("/", (req, res) => {
    NFP.findAll({
        attributes: [
            'id',
            'nfp_name',
            'url',
            'cause',
            'tags',
            'description',
            'size',
            'founding_year',
            'reported_net_assets',
            'city',
            'state',
            'zip',
            'phone_number',
            'email'
        ]   
    })
      .then((dbPostData) => {
         const nfps = dbPostData.map((npf) => npf.get({ plain: true }));
        // console.log(nfps)
        res.render('homepage', { nfps });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
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
// personal page //
router.get('/volunteer/:id', async (req, res) => {

    //console.log('HOMEROUTES')
    const firstQuery = await 
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
    const secondQuery = await 
    NFP.findAll({
        attributes: [
            'id',
            'nfp_name',
            'url',
            'cause',
            'tags',
            'description',
            'size',
            'founding_year',
            'reported_net_assets',
            'city',
            'state',
            'zip',
            'phone_number',
            'email'
        ]   
    })
    const renderObject = {
        volunteer: firstQuery,
        nfp: secondQuery
      }
     //const whatWeWant = renderObject.get({ plain: true });

      console.log(renderObject)
    res.render('volunteers', renderObject);
  });









// let formatPhoneNumber = (P) => {
//     //Filter only numbers from the input
//     let cleaned = ('' + P).replace(/\D/g, '');
    
//     //Check if the input is of correct length
//     let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
//     if (match) {
//       return '(' + match[1] + ') ' + match[2] + '-' + match[3]
//     }; 
//     return " "
//   };


// // personal page //
// router.get('/volunteer/:id', (req, res) => {

//     let newTableOfVol = {}

//     //console.log('HOMEROUTES')
//     Volunteer.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//         'id',
//         'first_name',
//         'last_name',
//         'email',
//         'phone_number',
//         'bio',
//         'city',
//         'state'
//       ]
//     })    
//       .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No user found with this id' });
//           return;
//         }

//         const volunteer = dbPostData.get({ plain: true });
//        console.log(dbPostData)
       
//         var num = formatPhoneNumber(volunteer.phone_number)
//         console.log(num)
//         volunteer.phone_number = num;
//         volunteer.id =  req.params.id;
//         res.render('volunteers', {
//           volunteer,
//           loggedIn: req.session.loggedIn
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });
  

//------------------------------------------------------------------------//
//////////////////////////USER PUT INFO/////////////////////////////////////
//------------------------------------------------------------------------//

// personal page //
router.put('/volunteer/:id', (req, res) => {
    console.log(req.params.id + "is the id")
    //console.log('put', req.body, req.params)
    Volunteer.update(
     {  first_name: req.body.userinfo.first_name,
        last_name: req.body.userinfo.last_name,
        email: req.body.userinfo.email,
        phone_number: req.body.userinfo.phone_number,
        bio: req.body.userinfo.bio,
        state: req.body.userinfo.state,
        city: req.body.userinfo.city,
        id: req.body.userinfo.id

    },
    {
      individualHooks: true,  
        where: {
            id: req.body.userinfo.id
      }}
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

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });





/////////////////////////////////////////////////////////////////////////////
router.get('/dashboard', (req, res) => {

});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// router.get('/volunteer/1', (req, res) => {
//     res.render('/volunteers');
// });

router.get('/admin', (req, res) => {
    res.render('admin');
})

router.get('/partners', (req, res) => {
    res.render('partner-nfp');
});

router.get('/admin', (req, res) => {

});

module.exports = router;