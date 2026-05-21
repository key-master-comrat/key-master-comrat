import Hero from "../components/Hero";
import Services from "../components/Services";

import WhyUs from "../components/WhyUs";
import Slogan from "../components/Slogan";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#010409] text-white">
      <div
        className="max-w-[430px] mx-auto min-h-screen bg-cover bg-top bg-repeat-y overflow-hidden"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="relative min-h-screen bg-black/28 overflow-hidden">
          <div className="absolute right-[-135px] top-[-30px] opacity-[0.16] pointer-events-none blur-[0.6px] z-0">
            <img
              src="/key-vector-full.svg"
              alt=""
              className="w-[370px] max-w-none saturate-90 brightness-95"
            />
          </div>

          <div className="relative z-10">
            <Hero />
            <Services />
            <WhyUs />
            <Slogan />
            <Contacts />
            <div className="mt-14">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
