"use strict";
const authorOne = { name: "john", avatar: "/img/john.png" };
const newPost = {
    title: "my first post",
    body: "somethig interesting",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne
};
//  console.log(newPost);
//  as function argument types
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
