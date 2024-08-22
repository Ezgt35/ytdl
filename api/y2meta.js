import fetch from 'node-fetch';

export default async (req, res) => {
  const { query } = req;
  const { url } = query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const response = await fetch(`https://y2meta.com/api?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch data from y2meta');
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
