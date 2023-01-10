const Department = require("../model/Department");
const MyError = require("../utils/myError");

// GET ALL CATEGORIES
module.exports.getDeparments = async (req, res, next) => {
  try {
    const existDepartment = await Department.find({});

    res.status(200).json({
      success: true,
      data: existDepartment,
    });
  } catch (err) {
    next(err);
  }
};

// CREATE
module.exports.createDepartment = async (req, res, next) => {
  const department = req.body;
  try {
    const newDepartment = await Department.create(department);
    res.status(200).json({
      success: true,
      data: newDepartment,
    });
  } catch (err) {
    next(err);
  }
};
