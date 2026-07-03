import bannerImage from "../assets/img/homepage.png";

import "./Banner.css";

const Banner = ({onShopNow}) => {
  return (
    <section className="cherie-banner">
      <img
        src={bannerImage}
        alt="Woman wearing nude elegant clothing"
        className="cherie-banner-image"
      />

      <div className="cherie-banner-content">
        <p className="cherie-banner-eyebrow">
          Timeless style. Effortless you.
        </p>

        <h1 className="cherie-banner-title">
          Elevated Looks
          <br />
          for Every Moment
        </h1>

        <p className="cherie-banner-description">
          Chic, feminine, and designed to make
          <br />
          you feel your most confident self.
        </p>

        <button 
          type="button"
          className="cherie-banner-button"
          onClick={onShopNow}
          
          >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;