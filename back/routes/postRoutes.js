const router = require("express").Router();

const { postTask } = require("../controllers/posttaskController");

router.post("/post_task", postTask);

module.exports = router;
