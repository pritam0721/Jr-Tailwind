import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-emerald-100 '>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 '>
        <h2 className='text-3xl font-bold'>
          Web
          <span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                href={href}
                key={id}
                className='capitalize text-lg tracking-wider hover:text-emerald-600 duration-300 hover:-translate-y-1 hover:scale-110 '
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
