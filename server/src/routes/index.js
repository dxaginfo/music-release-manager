const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const campaignRoutes = require('./campaignRoutes');
const taskRoutes = require('./taskRoutes');
const assetRoutes = require('./assetRoutes');
const analyticsRoutes = require('./analyticsRoutes');

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/campaigns', campaignRoutes);
router.use('/tasks', taskRoutes);
router.use('/assets', assetRoutes);
router.use('/analytics', analyticsRoutes);

// Welcome route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Music Release Campaign Manager API',
    version: '1.0.0',
    documentation: '/api/docs'
  });
});

module.exports = router;