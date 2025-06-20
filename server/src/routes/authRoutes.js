const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').not().isEmpty().withMessage('Name is required')
  ],
  authController.register
);

// Login user
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').exists().withMessage('Password is required')
  ],
  authController.login
);

// Get current user
router.get('/me', authMiddleware, authController.getCurrentUser);

// Request password reset
router.post(
  '/forgot-password',
  [
    body('email').isEmail().withMessage('Please enter a valid email')
  ],
  authController.forgotPassword
);

// Reset password
router.post(
  '/reset-password',
  [
    body('token').not().isEmpty().withMessage('Token is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  authController.resetPassword
);

// Refresh token
router.post('/refresh-token', authController.refreshToken);

// Logout user
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;