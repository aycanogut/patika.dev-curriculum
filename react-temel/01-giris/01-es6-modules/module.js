const topla = (a, b) => {
  return a + b;
};

const hello = name => {
  console.log(`hello ${name}`);
};

const cikar = (a, b) => {
  return a - b;
};

//! export as default 
export default cikar;

//! multiple export
export {
  topla,
  hello
};

//! export inline
export const text = "myText";