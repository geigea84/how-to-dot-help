const router = require('express').Router();
const { NFP, VolNFPs } = require('../../models');

router.get('/', (req, res) => {
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
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    NFP.findOne({
        where: {
            id: req.params.id
        },
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
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No NFP found with this id' });
                return;
            }
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    console.log("activated router.post");

    NFP.create({
        nfp_name: req.body.nfp_name,
        url: req.body.url,
        cause: req.body.cause,
        tags: req.body.tags,
        description: req.body.description,
        size: req.body.size,
        founding_year: req.body.founding_year,
        reported_net_assets: req.body.reported_net_assets,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone_number: req.body.phone_number,
        email: req.body.email,
        image_url: req.body.image_url
    })
        .then(dbPostData => {
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/interest', (req, res) => {
    VolNFPs.create({
        volunteer_id: req.body.volunteer_id,
        nfp_id: req.body.nfp_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.json(err));
})

router.put('/:id', (req, res) => {
    NFP.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
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

router.delete('/:id', (req, res) => {
    NFP.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
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