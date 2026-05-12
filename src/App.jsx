import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Slogan from "./components/Slogan";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <div
        className="max-w-[430px] mx-auto min-h-screen bg-cover bg-top bg-repeat-y"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="min-h-screen bg-black/28">
          <Hero />
          <Services />
          <Gallery />
          <WhyUs />
          <Slogan />
          <Contacts />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
