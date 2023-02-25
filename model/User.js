const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add username"],
      trim: true,
    },
    phone: {
      type: Number,
      maxlength: [20, "Phone number can not be longer than 20 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "please enter a valid password"],
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
