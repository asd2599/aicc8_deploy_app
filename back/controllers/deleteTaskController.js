const database = require("../database/database");
const { v4: uuidv4 } = require("uuid");

exports.deleteTask = async (request, response) => {
  const itemId = request.params.itemId;

  try {
    const result = await database.pool.query(
      "DELETE FROM tasks WHERE _id = $1;",
      [itemId],
    );
    return response.status(200).json({ msg: "Task Delete Sucessfully" });
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
};
