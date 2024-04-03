import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  return (
    <>
      <Cursor />
      <section id="Home">
        <Header />
        <Sidebar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section
        style={{
          height: "100px !importnat",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Footer />
      </section>
    </>
  );
}

export default App;
