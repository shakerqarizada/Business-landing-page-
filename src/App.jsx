import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Achive from "./components/Achive";
import Business from "./components/Business";
import Schedule from "./components/Schedule";
import Monitor from "./components/Monitor";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import News from "./components/Newsletter";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <Achive />
      <Business />
      <Schedule />
      <Monitor />
      <Pricing />
      <Service />
      <Testimonial />
      <News />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
