const router = require('express').Router();
const { Models } = require('');

// may need an authorization application before searching through API
router.get('/', (req, res) => {
    Models.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Models.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
        // may need to include more information can be added here
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