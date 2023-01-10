const jwt = require("jsonwebtoken");

module.exports.protect = async (req, res, next) => {
	if (req.cookies.token) {
		const token = req.cookies.token;
		const tokenobj = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = tokenobj.id;
	}
	next();
};
