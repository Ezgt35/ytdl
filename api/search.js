const ytsr = require('ytsr');

module.exports = async (req, res) => {
    const query = req.query.q;
    try {
        console.log(`Searching for: ${query}`);
        const searchResults = await ytsr(query, { limit: 10 });
        console.log(`Search Results: ${JSON.stringify(searchResults.items)}`);
        res.status(200).json(searchResults.items);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'Error fetching data from YouTube' });
    }
};
