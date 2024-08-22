const ytsr = require('ytsr');

module.exports = async (req, res) => {
    const query = req.query.q;
    try {
        console.log(`Searching for: ${query}`); // Log pencarian
        const searchResults = await ytsr(query, { limit: 10 });
        console.log(`Results: ${JSON.stringify(searchResults.items)}`); // Log hasil pencarian
        res.status(200).json(searchResults.items);
    } catch (error) {
        console.error(`Error: ${error.message}`); // Log error
        res.status(500).json({ error: 'Error fetching data from YouTube' });
    }
};
