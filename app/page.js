import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import Navbar from "@/components/Share/Navbar";

export default function Home() {
  return (
   <div>
      <Navbar />
      <Header />
      <About />
      <Services />
   </div>
  );
}
