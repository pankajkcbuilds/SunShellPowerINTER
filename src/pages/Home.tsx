import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Marquee from "../sections/Marquee";
import Categories from "../sections/Categories";
import Usp from "../sections/Usp";
import Products from "../sections/Products";
import Calculator from "../sections/Calculator";
import Faq from "../sections/Faq";
import Enquiry from "../sections/Enquiry";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Marquee />
      <Categories />
      <Usp />
      <Products />
      <Calculator />
      <Faq />
      <Enquiry />
      <Footer />
    </main>
  );
}
