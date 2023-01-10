const jwt = require("jsonwebtoken");

module.exports.protect = async (req, res, next) => {
  if (!req.cookie) {
    throw new Error("Эхлээд нэвтэрнэ үү.");
  }

  const token = req.cookie;

  if (!token) {
    throw new Error("Эхлээд нэвтэрнэ үү.");
  }

  const tokenobj = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = tokenobj.id;

  next();
};
