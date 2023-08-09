import About from '@/components/About';
import Additionals from '@/components/Additionals';
import HeroAbout from '@/components/HeroAbout';
import Navbar from '@/components/Navbar';
import { AboutData } from "@/components/assets/AboutData";

const about = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout
        heading=" ShoFi Media"
        message={AboutData.about}
      />
      <About/>
      <Additionals/>
    </div>
  );
}

export default about
