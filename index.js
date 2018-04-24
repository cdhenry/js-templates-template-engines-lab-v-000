function createPost() {
  let author = document.getElementById("author").value;
  let post = document.getElementById("post").value;
  let title = document.getElementById("title").value;

  //create template string
  let postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  let templateFn = _.template(postTemplate);

  let postsDiv = document.getElementById("posts");

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ 'title': title, 'post': post, 'author': author });

  //append rather than replace!
  postsDiv.innerHTML += templateHTML;
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  //create template string
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
