import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Cultos from "@/components/Cultos";
import Ministerios from "@/components/Ministerios";
import Eventos from "@/components/Eventos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Cultos />
        <Ministerios />
        <Eventos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
