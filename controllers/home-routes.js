const router = require('express').Router();
const sequelize = require('../config/connection');
const { Admin, NFP, User, VolNFPs } = require('../models')


//------------------------------------------------------------------------//
//Home Page
//------------------------------------------------------------------------//
router.get("/", (req, res) => {
  console.log(req.session.user_id);
  console.log(req.session.loggedIn);
  
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
            'email',
            'image_url'
        ]   
    })
      .then((dbPostData) => {
         const nfps = dbPostData.map((npf) => npf.get({ plain: true }));
        // console.log(nfps)
        //res.render('homepage', { nfps });
        res.render('homepage', {
          nfps,
          loggedIn: req.session.loggedIn
        })
      })
      
      .catch((err) => {
        res.status(500).json(err);
      });
  });


//------------------------------------------------------------------------//
//USERs NFP Page
//------------------------------------------------------------------------//
router.get('/usernfps', (req, res) => {
  VolNFPs.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'user_id',
      'nfp_id'
    ],
    include: [
      {
        model: NFP,
        attributes: ['id', 'nfp_name', 'url', 'cause', 'size', 'founding_year', 'image_url', 'description', 'tags', 'city', 'state', 'zip', 'email', 'phone_number']
      }
    ]
  })

  .then((dbPostData) => {
    const nfpMe = dbPostData.map((nfp) => nfp.get({ plain: true }));
    console.log(nfpMe)
   res.render('usernfps', {
     nfpMe,
     loggedIn: req.session.loggedIn
   })
 })
 
 .catch((err) => {
   res.status(500).json(err);
 });
});

//////////////////////////////--------------------------------------------
let formatPhoneNumber = (P) => {
    //Filter only numbers from the input
    let cleaned = ('' + P).replace(/\D/g, '');
    
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
 
    if (match == 1000000000){
      return " "
    }    
    else if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }; 
    return " "
  };


// personal page //
router.get('/user', (req, res) => {

    let newTableOfVol = {}

    //console.log('HOMEROUTES')
    User.findOne({
      where: {
        id: req.session.user_id
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

        const user = dbPostData.get({ plain: true });
       console.log(dbPostData)
       
        var num = formatPhoneNumber(user.phone_number)
        console.log(num)
        user.phone_number = num;
        user.id =  req.session.user_id;
        res.render('user', {
          user,
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
router.put('/user', (req, res) => {
    console.log(req.session.user_id + "is the id")
    //console.log('put', req.body, req.params)
    User.update(
     {  first_name: req.body.userinfo.first_name,
        last_name: req.body.userinfo.last_name,
        email: req.body.userinfo.email,
        phone_number: req.body.userinfo.phone_number,
        bio: req.body.userinfo.bio,
        state: req.body.userinfo.state,
        city: req.body.userinfo.city,
        id: req.session.user_id
    },
    {
      individualHooks: true,  
        where: {
            id: req.session.user_id
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

//------------------------------------------------------------------------//
//admin
//------------------------------------------------------------------------//

  router.get('/signup', (req, res) => {
    res.render('join', {
      loggedIn: req.session.loggedIn
    });
});


/////////////////////////////////////////////////////////////////////////////

router.get('/admin', (req, res) => {
    res.render('admin', {
      loggedIn: req.session.loggedIn
    });
})

//------------------------------------------------------------------------//
//partners
//------------------------------------------------------------------------//

router.get('/partners', (req, res) => {
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
        'email',
        'image_url'
    ]   
})
  .then((dbPostData) => {
     const nfps = dbPostData.map((npf) => npf.get({ plain: true }));
    console.log(nfps)
    res.render('partner-nfp', { nfps });
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

//------------------------------------------------------------------------//
//Admin Search Results
//------------------------------------------------------------------------//

//search volunteers
router.get("/adminvolunteers", (req, res) => {
  console.log(req);
    VolNFPs.findAll({
        where: {
          //[sequelize.literal("(SELECT (*) FROM User WHERE User.first_name, User.last_name)")]

          first_name: req.params.user_id,
          last_name: req.params.user_id
        },
        attributes: [
            'id',
            'user_id',
            'nfp_id'
        ],
        include: [
            {
              model: User,
              attributes: [
                'id',
                'first_name',
                'last_name',
                'city',
                'state',
                'bio',
                'phone_number',
                'email'
              ]
            },
            {
              model: NFP,
              attributes: [
                'first_name'
              ]
            }
        ]   
    })
      .then((dbPostData) => {
         const users = dbPostData.map((user) => user.get({ plain: true }));
          console.log(users)
        res.render('adminvolunteers', {
          users,
          loggedIn: req.session.loggedIn
        })
      })
      
      .catch((err) => {
        res.status(500).json(err);
      });
  });

/*
//search nfps  
router.get("/adminnfps", (req, res) => {
  console.log(req.query);
    VolNFPs.findAll({
        where: {
          nfp_name: req.query.searchNFP,

          attributes: [
            [sequelize.literal("(SELECT (*) FROM NFP WHERE NFP.nfp_name = Mike)")]
          ]
        },
        attributes: [
            'id',
            'user_id',
            'nfp_id'
        ],
        include: [
            {
              model: User,
              attributes: [
                'id',
                'first_name',
                'last_name',
                'city',
                'state',
                'bio',
                'phone_number',
                'email'
              ]
            },
            {
              model: NFP,
              attributes: [
                'first_name'
              ]
            }
        ]   
    })
      .then((dbPostData) => {
         const nfps = dbPostData.map((nfp) => nfp.get({ plain: true }));
          console.log(users)
        res.render('adminnfps', {
          nfps,
          loggedIn: req.session.loggedIn
        })
      })
      
      .catch((err) => {
        res.status(500).json(err);
      });
  });
*/

router.get("/adminnfps/search", (req, res) => {
  res.render("adminnfps/search");
});

router.get("/adminnfps/search", (req, res) => {
  let nfpName = req.query.searchNFP;

  sequelize.query('SELECT (*) FROM NFP where nfp_name like "%'+nfpName+'%"',
  function(err, rows, fields) {
    if (err) throw err;
    let data =[];
    for(i = 0; i<rows.length; i++)
    {
      data.push(rows[i].nfp_name);
    }
    res.send(JSON.stringify(data));
  });
});

module.exports = router;