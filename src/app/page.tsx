import Aboutus from "./components/Portfolio/Aboutus";
import { BackgroundBoxesDemo } from "./components/Portfolio/BackgroundBoxes";
import { Contact } from "./components/Portfolio/Contact";
import FAQ from "./components/Portfolio/FAQ";
import OurClient from "./components/Portfolio/OurClient";
import { Services } from "./components/Portfolio/Services";
import { Skilles } from "./components/Portfolio/Skilles";
export default function Home() {
  return (
    <div>
      {/* <FloatingNavDemo /> */}
      <BackgroundBoxesDemo />
      <Aboutus />
      <Services />
      <OurClient />
      {/* <Skilles /> */}
      <FAQ />
      <Contact />
    </div>
  );
}
