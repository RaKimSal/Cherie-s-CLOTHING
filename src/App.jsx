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

import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
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
        <Banner />
        <ShopbycategoryIcon onCategoryChange={setActivePage} />
        <NewarrivalIcons />
      </>
    );
  };

  return (
    <>
      <Navbar
        cartCount={0}
        onCategoryChange={setActivePage}
      />

      <main>{renderPage()}</main>

      <Footer />
    </>
  );
}

export default App;