import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Seitan Kebab",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Seitan aynı zamanda 'buğday eti' olarak da anılır, piyasada bulunan birçok vegan ürünün temelidir. Genelde bunu öğütülmüş, dilimler veya şeritler gibi çeşitli stillerde bulabilirsiniz. Seitan, tam buğday unu veya yaşamsal buğday glüteni kullanılarak elle hazırlanabilir. Buğday hamurunun nişastasını durulayarak ve geride sadece yüksek proteinli glüten bırakarak yapılır.",
  };

  const likeCount = 666;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          item={recipeItem}
          like={likeCount}
          image={food}
          isLiked={isLiked}
          likeCount={likeCount}
        />
      </header>
    </div>
  );
}

export default App;
