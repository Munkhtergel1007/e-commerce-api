const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode ?? 500).json({
    success: false,
    error: err.message,
  });
};

module.exports = errorHandler;
