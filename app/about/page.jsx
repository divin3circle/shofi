import About from '@/components/About';
import Additionals from '@/components/Additionals';
import Cta from '@/components/Cta';
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
      <Cta/>
    </div>
  );
}

export default about
