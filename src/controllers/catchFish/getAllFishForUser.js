const User = require('../../models/User');
const { controllerGetFishById } = require('./getFishById');

const controllerGetAllFishForUser = async (req, res) => {
  const { idUser } = req.body;
  
  try {

    const findUser = await User.findOne({_id: idUser})

    if (!findUser) {
      return res.status(404).json({ message: "El usuario no se encontro" });
    }

    const promise = findUser.catches.map(id => controllerGetFishById(id))

    // console.log(promise);
    
    const response = await Promise.all(promise)
    
    res.status(200).json(response);
    
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { controllerGetAllFishForUser };