import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ShopbycategoryIcon from "./components/ShopbycategoryIcon.jsx";
import NewarrivalIcons from "./components/NewarrivalIcons.jsx";
import SummerPage from "./components/SummerPage.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    if (activePage === "Summer") {
      return <SummerPage />;
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