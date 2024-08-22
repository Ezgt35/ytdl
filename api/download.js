const ytdl = require('ytdl-core');

module.exports = (req, res) => {
    const videoId = req.query.id;
    const format = req.query.format;
    const url = `https://www.youtube.com/watch?v=${videoId}`;

    if (format === 'mp3') {
        res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
        ytdl(url, { filter: 'audioonly' }).pipe(res);
    } else if (format === 'mp4') {
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(url, { format: 'mp4' }).pipe(res);
    } else {
        res.status(400).json({ error: 'Invalid format' });
    }
};
