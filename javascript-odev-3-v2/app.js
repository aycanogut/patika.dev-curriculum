const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// dom dec.
const app = document.querySelector(".menu");
const buttonContainer = app.querySelector(".btn-container");
const menuContainer = app.querySelector(".section-center");
let buttonList = [];

// create new button
const createButton = (category) => {
  button = `<button id=${category} class="btn btn-outline-dark btn-item">${category}</button>`;
  return button;
};

// create new menu card item
const cardItem = (category, img, title, price, description) => {
  menuItem = `
        <article id=${category} class="menu-items col-lg-6 col-sm-12">
        <img class="photo"
          src="${img}"
          alt="">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${title}</h4>
            <h4 class="price">${price}</h4>
          </div>
          <div class="menu-text">${description}</div>
        </div>
        </article>
      `;
};

const createMenu = (menu) => {
  // get data from object and pass the data to menu list items
  menu.map((item) => {
    cardItem(item.category, item.img, item.title, item.price, item.desc);

    // create buttons
    const allButton = createButton("All");
    const otherButtons = createButton(item.category, item.category);

    // push categories to the button array
    buttonList.push(button);

    // append 'All' button
    buttonList.unshift(allButton);

    // remove duplicates from button array
    buttonList = [...new Set(buttonList)];

    // remove comma between buttons
    buttonContainer.innerHTML = buttonList.join(" ");

    // add menu items to the menu container
    menuContainer.innerHTML += menuItem;
  });
};

// filter menu
const filterMenu = (menu) => {
  // capture click from user
  buttonContainer.addEventListener("click", (e) => {
    menuContainer.innerHTML = "";

    if (!e.target.closest("button")) return; // return false if node element isn't a button

    menuList = menu.filter((item) => item.category === e.target.textContent);

    menuList.map((item) => {
      cardItem(item.category, item.img, item.title, item.price, item.desc);

      // add menu items to the menu container
      menuContainer.innerHTML += menuItem;
      menuList.push(menuItem);
    });

    // render all items when 'All' button clicked
    if (e.target.textContent === "All") {
      menu.map((item) => {
        cardItem(item.category, item.img, item.title, item.price, item.desc);

        // add menu items to the menu container
        menuContainer.innerHTML += menuItem;
      });
    }
  });
};

createMenu(menu);
filterMenu(menu);
