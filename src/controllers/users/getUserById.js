const User = require("../../models/User");

const controllerGetUser = async (req, res) => {
  const { id } = req.body;

  try {
    const findUser = await User.findOne({ _id: id });

    if (!findUser) {
      return res.status(404).json({ message: "El usuario no se encontro" });
    }

    res.status(200).json(findUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { controllerGetUser };
