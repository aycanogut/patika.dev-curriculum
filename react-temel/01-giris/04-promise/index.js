// promise, resolve and reject

/* this block of code explains how promise works. --> https://javascript.info/promise-basics

? The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. 

!Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.
!When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

  ? resolve(value) — if the job is finished successfully, with result value.
  ? reject(error) — if an error has occurred, error is the error object. */


//* example of basics of promise
const promiseBasis = () => {
  const sayHi = (number) => {

    return new Promise((resolve, reject) => {
      if (number === 1) {
        resolve({
          text: 'Hi!'
        });
      }

      reject("Problem!");
    })
  };

  sayHi(0)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};
// promiseBasis();


//* examples with api
import axios from 'axios';

const promiseWithAPI = () => {
  const getUsers = () => {

    return new Promise(async (resolve, reject) => {
      const {
        data
      } = await axios('https://jsonplaceholder.typicode.com/users')

      resolve(data); //? --> runs the 'data' api
      // reject('error.'); //! --> throws error
    });
  };

  getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};
// promiseWithAPI();


// * arrenged with async examples 
const asyncAPI = () => {
  const getPosts = (id) => {

    return new Promise(async (resolve, reject) => {
      const {
        data
      } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);

      resolve(data);
      // reject(data);
    })
  };

  const getComments = (id) => {
    return new Promise(async (resolve, reject) => {
      const {
        data
      } = await axios(`https://jsonplaceholder.typicode.com/comments/${id}`);

      resolve(data);
    })
  };

  (async () => {
    await getPosts(1)
      .then((data) => console.log(data, 'POSTS'))
      .catch((e) => console.log(e));

    await getComments(2)
      .then((data) => console.log(data, 'COMMENTS'))
      .catch((e) => console.log(e));
  })();
};
// asyncAPI();


//* shorthand syntax and try catch 
const shortHandSyntax = () => {
  const getTodos = () => {

    return new Promise(async (resolve, reject) => {
      const {
        data
      } = await axios('https://jsonplaceholder.typicode.com/todos/1');

      resolve(data);
      // reject('No todos!');
    });
  };

  (async () => {
    try {
      const todos = await getTodos(); // --> shorthand usage
      console.log(todos);
    } catch (e) {
      console.log(e);
    }
  })();
};
// shortHandSyntax();


//* Promise.all ( run all promise functions shorthand )
const promiseAll = () => {
  const getPosts = (id) => {

    return new Promise(async (resolve, reject) => {
      const {
        data
      } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);

      resolve(data);
      // reject('some error');
    })
  };

  const getComments = (id) => {
    return new Promise(async (resolve, reject) => {
      const {
        data
      } = await axios(`https://jsonplaceholder.typicode.com/comments/${id}`);

      resolve(data);
      // reject('another error');
    })
  };

  Promise.all([getPosts(2), getComments(4)]) //? => this function runs all promises and takes all promises as an argument
    .then(console.log)
    .catch(console.log);
};
promiseAll();