import { Aboutus } from "./components/Portfolio/Aboutus";
import { BackgroundBoxesDemo } from "./components/Portfolio/BackgroundBoxes";
import { Contact } from "./components/Portfolio/Contact";
import { Services } from "./components/Portfolio/Services";
import { Skilles } from "./components/Portfolio/Skilles";
export default function Home() {
  return (
    <div>
      <BackgroundBoxesDemo />
      <Aboutus />
      <Services />
      <Skilles />
      <Contact />
    </div>
  );
}
