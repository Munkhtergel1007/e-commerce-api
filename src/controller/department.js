const Department = require("../model/Department");

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

module.exports.getOneDepartment = async (req, res, next) => {
  let query = req.body;
  try {
    const existData = await Department.findOne(query);
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateDepartment = async (req, res, next) => {
  try {
    const existData = await Department.findOneAndUpdate(
      { _id: req.body._id },
      { name: req.body.name }
    );
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteDepartment = async (req, res, next) => {
  try {
    const existData = await Department.findOneAndDelete({ _id: req.body._id });
    res.status(200).json({
      success: true,
      data: existData,
    });
  } catch (err) {
    next(err);
  }
};
