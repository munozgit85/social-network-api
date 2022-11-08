const router = require("express").Router();

const {
  getThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts GET all and POST thought
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by iD
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions POST new reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
