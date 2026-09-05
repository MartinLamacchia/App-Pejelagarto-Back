const CatchFish = require("../../models/CatchFish");
const User = require('../../models/User')

const controllerRegisterCatch = async (req, res) => {
  const {
    participant,
    fiscal,
    species,
    length,
    weight,
    photo,
    confirmDuplicate, // Viene en false/undefined la primera vez, true si el fiscal confirma
  } = req.body;

  try {
    // Buscar si ya existe una captura con las 3 características iguales, para el mismo participante
    const duplicateCatch = await CatchFish.findOne({
      participant,
      species,
      length,
      weight,
    });

    // Si existe y todavía no confirmaron que quieren registrarlo igual, avisar y frenar
    if (duplicateCatch && !confirmDuplicate) {
      return res.status(409).json({
        duplicate: true,
        message:
          "El participante ya tiene registrada una captura con la misma especie, largo y peso. ¿Desea registrarla igualmente?",
        existingCatch: duplicateCatch,
      });
    }

    // Si no hay duplicado, o el fiscal ya confirmó, se crea la captura
    const newCatch = await CatchFish.create({
      participant,
      fiscal,
      species,
      length,
      weight,
      photo,
    });

    // Se agrega la referencia de la captura al usuario participante
    await User.findByIdAndUpdate(participant, {
      $push: { catches: newCatch._id },
    });

    res.status(201).json({
      message: "Captura registrada con éxito",
      success: true,
      newCatch,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { controllerRegisterCatch };
