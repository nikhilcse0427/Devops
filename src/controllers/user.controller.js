const userService = require('../services/user.service');

/**
 * @desc    Get all users
 * @route   GET /api/v1/users
 * @access  Public
 */
const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create new user
 * @route   POST /api/v1/users
 * @access  Public
 */
const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await userService.createUser(userData)
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  createUser,
};
