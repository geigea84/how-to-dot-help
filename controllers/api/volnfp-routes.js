const router = require('express').Router();
const { VolNFPs, NFP, User } = require('../../models');

router.get('/userinterest', (req, res) => {
    VolNFPs.findAll({
        where: {
            id: req.params.user_id
        },
        include: [
            {
                model: NFP,
                attributes: ['id', 'nfp_name', 'url', 'cause', 'tags', 'description', 'size', 'founding_year', 'reported_net_assets', 'city', 'state', 'zip', 'phone_number', 'email', 'image_url']
            }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/nfpinterest', (req, res) => {
    VolNFPs.findAll({
        where: {
            id: req.params.nfp_id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'first_name', 'last_name', 'city', 'state', 'bio', 'phone_number', 'email']
            }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.post('/interest', (req, res) => {
    if(req.session) {
        VolNFPs.interest({ ...req.body, user_id: req.session.user_id}, { User, NFP, VolNFPs })
            .then(updatedInterest => res.json(updatedInterest))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

module.exports = router;