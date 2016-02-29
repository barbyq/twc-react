"use strict";
import request from 'superagent';

class TweetApi {
  getTweets(callback) {
    request
      .get('http://localhost:3000/tweets')
      .end(callback)
  }

  getHashtags(callback) {
    request
      .get('/hashtags.json')
      .end(callback)
  }

  searchByHashtag(hashtag, callback) {
    request
      .get('/tweets2.json')
      .query({ hashtag: hashtag })
      .end(callback)
  }

  search(search, callback) {
    request
      .get('/tweets2.json')
      .query({ search: search })
      .end(callback)
  }

}

export default new TweetApi();
