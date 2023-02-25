const User = require("../model/User");
const asyncHandler = require("express-async-handler");

exports.addUser = asyncHandler(async (req, res) => {
  const { phone, email, password, name } = req.body;
  const user = new User({
    phone,
    name,
    email,
    password,
  });
  await user.save();

  return res.status(200).json({
    success: true,
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
});

exports.editUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    user.phone = req.body.phone || user.phone;
    user.email = req.body.email || user.email;
    user.name = req.body.name || user.name;
    const updatedUser = await user.save({
      validateBeforeSave: false,
    });
    res.status(200).json({
      _id: updatedUser.id,
      name: updatedUser.name,
      phone: updatedUser.phone,
      email: updatedUser.email,
    });
  } else {
    throw new Error("User not found");
  }
});

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    users,
  });
});

exports.removeUsers = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    throw new Error("no user found");
  } else {
    await user.remove();
    res.status(200).json({
      message: "removed",
    });
  }
});
