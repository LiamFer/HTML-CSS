const Author = require('./Author')
const Post = require("./Post");


let user1 = new Author('William')


console.log(user1)

user1.newPost('O thiago é viado!')

user1.posts[0].comment('Thiago','Apaga essa porra maluco!')
user1.posts[0].comment('Eduardo','O thiago é viado mesmo assino embaxo')



user1.newPost('O thiago é viado memo rapaz!')


console.log(user1.posts)