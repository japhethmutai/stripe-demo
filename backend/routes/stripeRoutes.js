const express = require('express');
const router = express.Router();
const { getStripe, setStripe } = require('../controllers/stripeController');

router.route('/').get(getStripe).post(setStripe);

module.exports = router;