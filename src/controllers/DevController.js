const axios = require('axios');

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const response = await axios.get(`http://api.github.com/users/${username}`);

        return res.json(response.data)
    }
}