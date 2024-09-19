import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutBlock from "./components/blocks/About";
import CooperationBlock from "./components/blocks/Cooperation";
import Cooperation2Block from "./components/blocks/Cooperation2";
import DiscountsBlock from "./components/blocks/Discounts";
import EventsBlock from "./components/blocks/Events";
import ExtraBlock from "./components/blocks/Extra";
import FAQBlock from "./components/blocks/FAQ";
import ProductsBlock from "./components/blocks/Products";
import ProjectsBlock from "./components/blocks/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DiscountsBlock />
        <AboutBlock />
        <ProjectsBlock />
        <ProductsBlock />
        <CooperationBlock />
        <EventsBlock />
        <Cooperation2Block />
        <ExtraBlock />
        <FAQBlock />
      </main>
      <Footer />
    </div>
  );
}

export default App;
