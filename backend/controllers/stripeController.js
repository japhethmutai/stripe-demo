const asyncHandler = require('express-async-handler');

// @desc    Get Stripe
// @route   GET /api/stripe
// @access  Private
const getStripe = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Stripe Details' });
})

// @desc    Set Stripe
// @route   POST /api/stripe
// @access  Private
const setStripe = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'Please add a text field!'})
    }
    res.status(200).json({ message: 'Set Stripe Details' });
})

module.exports = {
    getStripe,
    setStripe
}