const fs = require('fs');
const ytdl = require('ytdl-core');

const videoUrl = ''; // YouTube Video URL
const videoStream = ytdl(videoUrl, { quality: 'highestvideo', filter: 'videoandaudio' });

videoStream.pipe(fs.createWriteStream('video.mp4'));