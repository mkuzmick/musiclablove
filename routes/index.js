var express = require('express');
var router = express.Router();

var songs = [
  {
    title: 'All You Need Is Love',
    youtubeUrl:'https://www.youtube.com/embed/_7xMfIp-irg',
    artist: 'The Beatles'
  },
  {
    title: 'Best Part',
    youtubeUrl:'https://www.youtube.com/embed/7oo8ojsYIPk',
    artist: 'Daniel Caesar & H.E.R.'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thequiz', function(req, res, next) {
  res.render('index', { title: 'The Quiz' });
});

router.get('/songthings', function(req, res, next) {
  res.render('songs', { title: 'Song Things' , song: songs[0]});
});


module.exports = router;
