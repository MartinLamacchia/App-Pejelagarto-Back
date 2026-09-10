const User = require("../../models/User");

const controllerRegister = async (req, res) => {
  const {
    name,
    lastname,
    email,
    password,
    role,
    phone,
    country,
    preferredLanguage,
  } = req.body;

  try {
    const findUser = await User.findOne({
      $or: [{ email }, { $and: [{ name }, { lastname }] }],
    });

    if (findUser) {
      return res
        .status(400)
        .json({ code: "duplicate_user" });
    }

    const newUser = await User.create({
      name,
      lastname,
      email,
      password,
      role,
      phone,
      country,
      preferredLanguage,
    });

    res.status(201).json({
      code: "register_success",
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

module.exports = { controllerRegister };
