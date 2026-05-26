const express = require('express');
const router = express.Router();
const user_routes = require('./user.routes');

// Health check
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

router.use('/users', user_routes);

module.exports = router;
