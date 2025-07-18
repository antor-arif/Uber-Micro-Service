const router = require('express').Router();
const { register, login, logout, profile, acceptedRide } = require('../controllers/user');
const { userAuth } = require('../middlewares/authMiddleware');


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile', userAuth, profile);
router.get('/accepted-ride',userAuth, acceptedRide);

module.exports = router;