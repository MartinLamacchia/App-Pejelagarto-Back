const User = require("../../models/User");

const controllerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await User.findOne({ email }).select('+password');

    if (!findUser) {
      return res.status(404).json({ message: "El mail no esta registrado" });
    }

    const isPasswordValid = await findUser.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(404).json({ message: "La contraseña no es correcta" });
    }

    res.status(200).json({ access: true, findUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { controllerLogin };