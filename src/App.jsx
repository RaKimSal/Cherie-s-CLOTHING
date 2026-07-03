import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ShopbycategoryIcon from "./components/ShopbycategoryIcon.jsx";
import NewarrivalIcons from "./components/NewarrivalIcons.jsx";

import AllPage from "./components/AllPage.jsx";
import SummerPage from "./components/SummerPage.jsx";
import DressPage from "./components/DressPage.jsx";
import TopPage from "./components/TopPage.jsx";
import BottomPage from "./components/BottomPage.jsx";
import AccessoriesPage from "./components/AccessoriesPage.jsx";
import SalePage from "./components/SalePage.jsx";
import CartPage from "./components/CartPage.jsx";
import FavoritesPage from "./components/FavoritesPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import OrderHistoryPage from "./components/OrderHistoryPage.jsx";
import SurveyPage from "./components/SurveyPage.jsx";

import AuthModal from "./components/AuthModal.jsx";

import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [previousPage, setPreviousPage] = useState(null);

  const handlePageChange = (page) => {
    if (page !== activePage) {
      setPreviousPage(activePage);
    }

    setActivePage(page);
  };

  const handleBack = () => {
    if (previousPage) {
      setActivePage(previousPage);
      setPreviousPage(null);
      return;
    }

    setActivePage("All");
  };

  const renderPage = () => {
    if (activePage === "Checkout") {
      return (
        <CheckoutPage
          onBackToCart={() => handlePageChange("Cart")}
          onContinueShopping={() => handlePageChange("All")}
          onViewOrders={() => handlePageChange("Orders")}
          onSurvey={() => handlePageChange("Survey")}
        />
      );
    }

    if (activePage === "Survey") {
      return (
        <SurveyPage
          onContinueShopping={() => handlePageChange("All")}
        />
      );
    }

    if (activePage === "Orders") {
      return (
        <OrderHistoryPage
          onContinueShopping={() => handlePageChange("All")}
        />
      );
    }

    if (activePage === "Cart") {
      return (
        <CartPage
          onContinueShopping={() => handlePageChange("All")}
          onCheckout={() => handlePageChange("Checkout")}
        />
      );
    }

    if (activePage === "Favorites") {
      return (
        <FavoritesPage
          onContinueShopping={() => handlePageChange("All")}
        />
      );
    }

    if (activePage === "All") {
      return <AllPage />;
    }

    if (activePage === "Summer") {
      return <SummerPage />;
    }

    if (activePage === "Dresses") {
      return <DressPage />;
    }

    if (activePage === "Tops") {
      return <TopPage />;
    }

    if (activePage === "Bottoms") {
      return <BottomPage />;
    }

    if (activePage === "Accessories") {
      return <AccessoriesPage />;
    }

    if (activePage === "Sale") {
      return <SalePage />;
    }

    return (
      <>
        <Banner onShopNow={() => handlePageChange("All")} />
        <ShopbycategoryIcon onCategoryChange={handlePageChange} />
        <NewarrivalIcons />
      </>
    );
  };

  return (
    <>
      <Navbar onCategoryChange={handlePageChange} />

      <AuthModal />

      <main>{renderPage()}</main>

      <Footer />
    </>
  );
}

export default App;