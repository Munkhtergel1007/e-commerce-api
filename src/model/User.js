const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Та нэрээ оруулна уу."],
  },
  lastName: {
    type: String,
    required: [true, "Та овгоо оруулна уу."],
  },
  email: {
    type: String,
    required: [true, "Та и-майл хаягаа оруулна уу."],
    uniquie: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Таны и-майл хаяг буруу байна.",
    ],
  },
  password: {
    type: String,
    minlength: 4,
    required: [true, "Та нууц үгээ оруулна уу."],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getJsonWebToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  return token;
};

UserSchema.methods.checkPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
