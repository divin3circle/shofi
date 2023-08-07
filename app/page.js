import About from '@/components/About'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero
        heading=" Shofi Media"
        message="A Documented World From an Excellent Media Solution"
      />
      <Testimonials />
    </>
  );
}
