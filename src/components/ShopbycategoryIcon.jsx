import newInIcon from "../assets/img/newInIcon.png";
import dressesIcon from "../assets/img/dressesIcon.png";
import topsIcon from "../assets/img/topsIcon.png";
import bottomIcon from "../assets/img/bottomIcon.png";
import bagIcon from "../assets/img/bagIcon.png";
import saleIcon from "../assets/img/saleIcon.png";

import "./ShopbycategoryIcon.css";

const ShopbycategoryIcon = ({ onCategoryChange }) => {
  const categories = [
    {
      name: "New In",
      image: newInIcon,
    },
    {
      name: "Dresses",
      image: dressesIcon,
    },
    {
      name: "Tops",
      image: topsIcon,
    },
    {
      name: "Bottoms",
      image: bottomIcon,
    },
    {
      name: "Accessories",
      image: bagIcon,
    },
    {
      name: "Sale",
      image: saleIcon,
    },
  ];

  const handleCategoryClick = (categoryName) => {
    if (onCategoryChange) {
      onCategoryChange(categoryName);
    }
  };

  return (
    <section className="shop-category-section">
      <h2 className="shop-category-title">
        Shop by Category
      </h2>

      <div className="shop-category-list">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className="shop-category-item"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="shop-category-image-wrapper">
              <img
                src={category.image}
                alt={`${category.name} category`}
                className="shop-category-image"
              />
            </div>

            <span className="shop-category-name">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ShopbycategoryIcon;