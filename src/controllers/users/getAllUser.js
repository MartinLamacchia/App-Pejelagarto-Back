const User = require("../../models/User");

const controllerGetAllUsers = async (req, res) => {
  try {

    const allUser = await User.find()

    res.status(200).json(allUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { controllerGetAllUsers };
