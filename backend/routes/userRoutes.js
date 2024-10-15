const express =require('express');
const { authUser, registerUser, getUserProfile } =require('../controllers/userController.js');
const { protect } =require('../middleware/authMiddleware.js');

const router = express.Router();

router.route('/login').post(authUser);
router.route('/register').post(registerUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
