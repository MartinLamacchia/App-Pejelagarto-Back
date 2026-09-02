const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Email inválido"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ["participante", "juez", "fiscal"],
        message: "{VALUE} no es un rol válido",
      },
      required: true,
      default: "participante",
    },
    country: {
      type: String,
      trim: true,
    },
    preferredLanguage: {
      type: String,
      enum: ["es", "pt-BR", "en"],
      default: "es",
    },
    // catchFish: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "CatchFish",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  },
);

// Hashear la contraseña antes de guardar, solo si fue modificada
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Método para comparar contraseñas al hacer login
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", UserSchema);
