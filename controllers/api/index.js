const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const adminRoutes = require('./admin-routes.js');
const nfpRoutes = require('./nfp-routes.js');

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/nfp', nfpRoutes);

module.exports = router;