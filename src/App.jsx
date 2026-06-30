import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import ShopbycategoryIcon from "./components/ShopbycategoryIcon.jsx";
import NewarrivalIcons from "./components/NewarrivalIcons.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar cartCount={0} />

      <main>
        <Banner />
        <ShopbycategoryIcon />
        <NewarrivalIcons />
      </main>

      <Footer />
    </>
  );
}

export default App;