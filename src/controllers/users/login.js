const User = require("../../models/User");

const controllerLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const findUser = await User.findOne({ email }).select('+password')
    .populate('catches')
    
    if (!findUser) {
      return res.status(404).json({ code: "email_incorrect" });
    }
    
    const isPasswordValid = await findUser.comparePassword(password);
    
    if (!isPasswordValid) {

      return res.status(404).json({ code: "pass_incorrect" });
    }

    res.status(200).json({ access: true, findUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { controllerLogin };