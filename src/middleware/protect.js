const jwt = require("jsonwebtoken");

module.exports.protect = async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new Error("Эхлээд нэвтэрнэ үү.");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new Error("Эхлээд нэвтэрнэ үү.");
  }

  const tokenobj = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = tokenobj.id;

  next();
};
