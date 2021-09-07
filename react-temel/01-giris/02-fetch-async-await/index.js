// setTimeout function (runs the function after some time)
setTimeout(() => {
  // console.log('Test');
}, 2000);

// setInterval function (runs the function on every time)
setInterval(() => {
  // console.log('Print this text on each second');
}, 1000);


//! callback functions
// this function runs a callback function
const sayHello = (cb) => {
  cb();
};

// invoke the anonymous function (callback) and print the message
sayHello(() => {
  console.log('Hello');
});

//! fetch api
import fetch from 'node-fetch';

// fetch('https://jsonplaceholder.typicode.com/users') // pull the data from api
//   .then((data) => data.json()) // convert to string
//   .then((users) => { // load the users data first
//     console.log('users loaded with FETCH API', users);

//     fetch('https://jsonplaceholder.typicode.com/posts/1') // after the users data is completed, pull another data from api
//       .then((data) => data.json())
//       .then((post) => {
//         console.log('post1 loaded with FETCH API', post);

//         fetch('https://jsonplaceholder.typicode.com/posts/2') // after the post1 data is completed, pull another data from api
//           .then((data) => data.json())
//           .then((post) => {
//             console.log('post2 loaded with FETCH API', post);
//           })
//       });
//   });

//! async-await
async function getData() {
  const comments = await (await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')).json();
  const id = await (await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')).json();
  const post1 = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
  const post2 = await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();

  console.log('comments ASYNC', comments);
  console.log('id ASYNC', id);
  console.log('post1 ASYNC', post1);
  console.log('post2 ASYNC', post2);
};

getData();