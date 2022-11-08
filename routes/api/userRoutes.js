const router = require("express").Router();

const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
  removeThought,
} = require("../../controllers/userController");

// /api/users GET all and POST
router.route("/").get(getUser).post(createUser);

// /api/users/:userId GET one user, PUT and DELETE by user's ID
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// /api/users/:userId/thoughts/:thoughtId DELETE a users thoughts
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

module.exports = router;
