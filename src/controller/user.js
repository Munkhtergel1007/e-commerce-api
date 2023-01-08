const User = require("../model/User");

module.exports.register = async (req, res, next) => {
  const user = await User.create(req.body);

  const token = user.getJsonWebToken();

  res.status(200).json({
    success: true,
    token,
    data: user,
  });
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  console.log("req.body =================>", req.body);
  // console.log("password =================>", password);

  if (!email || !password) {
    throw new Error("Та и-мэйл хаяг болон нууц үгээ оруулна уу.");
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("И-мэйл эсвэл нууц үг буруу байна.");
    }

    const isOk = await user.checkPassword(password);

    if (!isOk) {
      throw new Error("И-мэйл эсвэл нууц үг буруу байна.");
    }

    res.status(200).json({
      success: true,
      token: user.getJsonWebToken(),
    });
  } catch (err) {
    next(err);
  }
};

module.exports.checkAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new Error("token bhku bno1");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new Error("Token bhku bna2");
  }

  res.status(200).json({
    success: true,
    token,
  });
};
