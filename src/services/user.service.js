/**
 * Business logic for user operations
 */

// Dummy data to simulate a database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const getAllUsers = async () => {
  // In a real app, this would be: return await User.find();
  return users;
};

const createUser = async (userData) => {
  // In a real app, validation and DB call would happen here
  const newUser = {
    id: users.length + 1,
    ...userData,
  };
  users.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsers,
  createUser,
};
