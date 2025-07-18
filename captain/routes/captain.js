const router = require('express').Router();
const { register, login, logout, profile, toggleAvailability, waitForNewRide } = require('../controllers/captain');
const { captainAuth } = require('../middlewares/authMiddleware');



router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile', captainAuth, profile);
router.patch('/toggle-availability', captainAuth,toggleAvailability);
router.get('/new-ride', captainAuth, waitForNewRide);


module.exports = router;