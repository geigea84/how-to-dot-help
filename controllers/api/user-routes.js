const router = require('express').Router();
const { Volunteer } = require('../../models');



// may need an authorization application before searching through API
router.get('/', (req, res) => {
    Volunteer.findAll({
        //attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//  /api/users/:id
router.get('/:id', (req, res) => {
    console.log("WE HIT IT HARAY!!")
    Volunteer.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            'first_name',
            'last_name',
            'city',
            'state',
            'bio',
            'phone_number',
            'email',
            'id'
        ]
    })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
           // res.json(dbUserData);
            res.render("volunteers", dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Volunteer.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        state: req.body.state,
        bio: req.body.bio,
        phone_number: req.body.phone_number,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            res.json(dbUserData);
            })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Volunteer.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            city: req.body.city,
            state: req.body.state,
            bio: req.body.bio,
            phone_number: req.body.phone_number,
            email: req.body.email,
            password: req.body.password
        },
        {
        where: {
            id: req.params.id
        }
        }
        )
        .then(dbUserData => {
            if(!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.delete('/:id', (req, res) => {
    Volunteer.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
