import axios from 'axios';

// axios utilization with async operations

(async () => {
  const {
    data: users
  } = await axios('https://jsonplaceholder.typicode.com/users');

  const {
    data: comments
  } = await axios('https://jsonplaceholder.typicode.com/comments/1');

  const {
    data: posts
  } = await axios('https://jsonplaceholder.typicode.com/posts/1');

  console.log(users, 'users');
  console.log(comments, 'comments');
  console.log(posts, 'posts');
})();