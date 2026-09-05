const User = require("../../models/User")

const controllerDeleteUser = async (req,res) => {
  
  const {id} = req.body

  try {

    const findUser = await User.findOne({_id: id})

    if (!findUser) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    await User.deleteOne({_id: id})
    
    res.status(200).json({message: "Usuario Eliminado", findUser})
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }


}

module.exports = {controllerDeleteUser}