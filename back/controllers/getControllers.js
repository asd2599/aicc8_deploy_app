const database = require('../database/database');

exports.getTasks = async (request, response) => {
    const userid = request.params.userid;

    try {
        const result = await database.pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
        return response.status(200).json(result.rows);
    } catch (error) {        
        return response.status(500).json({ error: 'Internal server error' });
    }
}