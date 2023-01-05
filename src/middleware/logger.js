const logger = (req, res, next) => {
    req.userId = "ddjdsdfsd12321jkhjk2132";
    console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
    next();
};

module.exports = logger;
