import "./ProductCard.scss";
import Star from "../../../assets/star.svg";
const ProductCard = (props) => {
  let productInfo = props.productInfo;
  /*{
    src: "src/assets/product/1.jpg",
    name: "apple",
    price: 3527,
    discountPrice: 2927,
    rating: 4.7,
  };
    */

  let isDiscount =
    !!productInfo.discountPrice &&
    typeof productInfo.discountPrice === "number" &&
    isFinite(productInfo.discountPrice);

  return (
    <div className="product-card">
      <img
        className="product-picture"
        src={productInfo.src}
        alt={productInfo.name}
      />

      <div className="product-info">
        <div className="product-info__row">
          <p className="product__name">{productInfo.name}</p>

          <div className="price-info">
            {isDiscount && (
              <p className="price price--discount">
                {productInfo.discountPrice}
              </p>
            )}
            <p className="price">{productInfo.price}</p>
          </div>
        </div>

        <div className="product-info__row">
          <div className="rating">
            <img src={Star} alt="star" className="star" />
            <p className="rating">{productInfo.rating}</p>
          </div>
          <button className="buy-product-btn">Купить</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
