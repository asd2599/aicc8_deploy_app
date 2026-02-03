const router = require("express").Router();

const { deleteTask } = require("../controllers/deleteTaskController");

router.delete("/delete_task/:itemId", deleteTask);

module.exports = router;
