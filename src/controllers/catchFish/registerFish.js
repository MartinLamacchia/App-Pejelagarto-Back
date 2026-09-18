const CatchFish = require("../../models/CatchFish");
const User = require('../../models/User')

const controllerRegisterCatch = async (req, res) => {
  const {
    fisherman,
    fiscal,
    species,
    length,
    weight,
    photo,
    confirmDuplicate, // Viene en false/undefined la primera vez, true si el fiscal confirma
  } = req.body;

  try {
    // Buscar si ya existe una captura con las 3 características iguales, para el mismo pescador
    const duplicateCatch = await CatchFish.findOne({
      fisherman,
      species,
      length,
      weight,
    });

    // Si existe y todavía no confirmaron que quieren registrarlo igual, avisar y frenar
    if (duplicateCatch && !confirmDuplicate) {
      return res.status(409).json({
        duplicate: true,
        code:
          "El pescador ya tiene registrada una captura con la misma especie, largo y peso. ¿Desea registrarla igualmente?",
        existingCatch: duplicateCatch,
      });
    }

    // Si no hay duplicado, o el fiscal ya confirmó, se crea la captura
    const newCatch = await CatchFish.create({
      fisherman,
      fiscal,
      species,
      length,
      weight,
      photo,
    });

    // Se agrega la referencia de la captura al usuario pescador
    await User.findByIdAndUpdate(fisherman, {
      $push: { catches: newCatch._id },
    });

    res.status(201).json({
      code: "Captura registrada con éxito",
      success: true,
      newCatch,
    });
  } catch (error) {
    res.status(500).json({ code: error.message });
  }
};

module.exports = { controllerRegisterCatch };
