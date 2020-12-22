const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const adminRoutes = require('./admin-routes.js');

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);

module.exports = router;