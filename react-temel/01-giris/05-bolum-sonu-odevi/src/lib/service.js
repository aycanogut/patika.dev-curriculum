import axios from 'axios';

const getData = async (id) => {

  // get the data from api
  const {
    data: users
  } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

  const {
    data: posts
  } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  // filtered the first id of posts object
  const firstId = posts.filter((item) => item.id === 1);

  // created an array include users and filtered-post objects
  const data = [users, firstId];

  console.log(data);
  return data;
};

getData(1);

export default getData;