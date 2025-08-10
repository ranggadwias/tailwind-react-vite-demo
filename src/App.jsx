import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductList from "./components/Product/ProductList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
