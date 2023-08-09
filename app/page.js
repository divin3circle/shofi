import About from '@/components/About'
import Contact from '@/components/Contact';
import Faqs from '@/components/Faqs';
import Hero from '@/components/Hero'
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero
        heading=" Short Films Media"
        message="A Documented World From an Excellent Media Solution"
      />
      <Testimonials />
      <Services />
      <Faqs/>
      <Contact />
    </>
  );
}
