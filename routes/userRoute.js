const express = require("express");
const router = express.Router();

const {
  addUser,
  editUser,
  getUsers,
  removeUsers,
} = require("../api/userController");

router.route("/").get(getUsers);
router.route("/add").post(addUser);
router.route("/edit/account/:id/new").put(editUser);
router.route("/remove/:id").delete(removeUsers);

module.exports = router;
