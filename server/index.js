const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

// middlewares 
app.use(cors());


// apis
app.get('/download', (req, res) => {
    var url = req.query.url;
    //res.send(url);
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(url, {
        format: 'mp4'
    }).pipe(res);
});


app.listen(4000, () => {
    console.log(`Server works at port 4000`);
});