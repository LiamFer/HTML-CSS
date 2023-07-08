
const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  newPost(postContent) {
    let newPost = new Post(this.name, postContent);
    this.posts.push(newPost);
    console.log(newPost);
  }
}

module.exports = Author;
