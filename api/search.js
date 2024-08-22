const ytsr = require('ytsr');

module.exports = async (req, res) => {
    const query = req.query.q;
    try {
        const searchResults = await ytsr(query, { limit: 10 });
        res.status(200).json(searchResults.items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from YouTube' });
    }
};
