/**
 * The server for the font scraper.
 */
import express from 'express';

export default async function serve({port}) {
  const app = express();
  app.use(express.json());

  app.post('/parseFonts', (req, res, next) => {
    const {
      url,
    } = req.body;

    // --------- Placeholder logic
    // --------- Replace with your implementation
    let data = {
      ok: true,
      fontFamilies: [],
    };
    if (url === 'http://news.ycombinator.com') {
      data = {
        ok: true,
        fontFamilies: ['Verdana', 'Geneva', 'sans-serif', 'monospace'],
      };
    } else if (url === 'http://example.com/this-will-404') {
      data = {
        ok: false,
        reason: 'Page responded with HTTP status 404',
      };
    }
    // --------- End placeholder logic

    res.json(data);
  });

  return new Promise((resolve, reject) => {
    const _server = app.listen(port, err => {
      if (err) {
        reject(err);
        return;
      }
      console.log(`App listening on port ${port}.`);
      resolve(_server);
    });
  });
}

