import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <div className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-800 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam
            repellat magnam mollitia culpa dolor dicta! Illo nam, sed accusamus
            culpa quis a voluptas, reprehenderit quo quaerat dolorum corporis
            libero!
          </p>
        </article>
      </div>
    </div>
  );
};
export default About;
