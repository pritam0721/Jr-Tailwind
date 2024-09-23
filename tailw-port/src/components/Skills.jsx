import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle text='tech stack' />
      <div className=' py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((item) => {
          return <SkillsCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
