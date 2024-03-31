import ProductCard from "./UI/ProductCard/ProductCard.jsx";
import ProductCardGroup from "./ProductCardGroup.jsx";

const MainContent = ({ data }) => {
  const splitData = (data) => {
    //1. Берём тип девайса
    //Делаем под него массив и добавляем в него
    let typedData = {};
    for (let i = 0; i < data.length; i++) {
      if (typedData[data[i].productType]) {
        typedData[data[i].productType].push(data[i]);
      } else {
        typedData[data[i].productType] = [data[i]];
      }
    }

    return typedData;
  };

  const listProductCards = splitData(data).map((key, elem) => (
    <ProductCardGroup key={key} productList={elem} />
  ));

  let productInfo = {
    src: "src/assets/product/1.jpg",
    name: "apple",
    price: 3527,
    discountPrice: 2927,
    rating: 4.7,
  };

  return (
    <div>
      {listProductCards}
      <ProductCard productInfo={productInfo} />
    </div>
  );
};

export default MainContent;
