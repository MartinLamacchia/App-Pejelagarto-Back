const CatchFish = require("../../models/CatchFish");

const controllerGetFishById = async (id) => {  
  
  try {
    const findFish = await CatchFish.findOne({ _id: id })
    .populate("fiscal")

    if (!findFish) {
      return res.status(404).json({ message: "El usuario no se encontro" });
    }

    return findFish
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { controllerGetFishById };
