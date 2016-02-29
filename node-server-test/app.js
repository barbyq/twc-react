var express = require('express'),
    cors = require('cors');
var app = express();

app.use(cors());

app.get('/tweets', function (req, res) {
  res.json([{
    "id": 1,
    "created_at": "Wed Aug 27 13:08:45 +0000 2008",
    "text": "hey there this is a tweet",
    "user" : {
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/687515380/16975_226267097594_612302594_3705762_295508_n.jpg",
      "id": 1,
      "screen_name": "barbyq"
    },
    "entities": {
        "hashtags":[],
        "urls":[],
        "user_mentions":[]
    }
  }, {
    "id": 2,
    "created_at": "Wed Aug 27 14:08:45 +0000 2008",
    "text": "another one",
    "user" : {
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/687515380/16975_226267097594_612302594_3705762_295508_n.jpg",
      "id": 1,
      "screen_name": "barbyq"
    },
    "entities": {
        "hashtags":[],
        "urls":[],
        "user_mentions":[]
    }
  },{
    "id": 3,
    "created_at": "Wed Aug 27 16:08:45 +0000 2008",
    "text": "oh hi",
    "user" : {
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/687515380/16975_226267097594_612302594_3705762_295508_n.jpg",
      "id": 1,
      "screen_name": "barbyq"
    },
    "entities": {
        "hashtags":[],
        "urls":[],
        "user_mentions":[]
    }
  }
]);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
