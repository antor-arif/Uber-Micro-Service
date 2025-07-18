const express = require('express').Router();
const { userAuth, captainAuth } = require('../middlewares/auth');
const { createRide, acceptRide } = require('../controllers/ride');


router.post('/create-ride', userAuth, createRide);
router.put('/accept-ride',captainAuth, acceptRide);


module.exports = router;