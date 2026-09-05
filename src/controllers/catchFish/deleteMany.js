const CatchFish = require("../../models/CatchFish");

const controllerDeleteManyFish = async (req, res) => {

  try {
    
    await CatchFish.deleteMany()

    res.status(200).json("Base de datos de peces borrada")

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

module.exports = {controllerDeleteManyFish}