const Comment = require("./Comment");

class Post {
  constructor(author, postContent) {
    this.author = author;
    this.content = postContent;
    this.comments = [];
  }
  comment(user, comment) {
    let newComment = new Comment(user, comment);
    this.comments.push(newComment);
  }
}

module.exports = Post;
