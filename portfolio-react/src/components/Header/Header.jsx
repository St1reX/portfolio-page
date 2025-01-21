import useAnimateOnScroll from '../../hooks/useAnimateOnScroll';

export default function Header() {
  const navItems = [
    { title: 'Introduction', url: '#Introduction', style: 'mr-7' },
    { title: 'Skills', url: '#Skills', style: 'mr-7' },
    { title: 'Projects', url: '#Projects', style: 'mr-7' },
    { title: 'Goals', url: '#Goals', style: '' },
  ];

  const [ref, isNotVisible] = useAnimateOnScroll(0, 'below');

  return (
    <div
      ref={ref}
      className={`w-full px-24 mb-40 min-h-[100px] ${isNotVisible ? '' : ''}`}
      id="Introduction"
    >
      <nav
        className={`w-full flex justify-center items-center font-light text-lg text-white border-b-2 duration-700 h-0 overflow-hidden${
          isNotVisible
            ? 'border-x-2 fixed top-0 left-0 bg-zinc-700 bg-opacity-90 z-10 h-[100px] py-8'
            : ''
        }`}
        id="fixedNav"
      >
        {navItems.map(({ title, url, style }) => (
          <a
            key={url}
            href={url}
            className={`hover:-translate-y-1 transition-transform ${style}`}
          >
            {title}
          </a>
        ))}
      </nav>

      <nav
        className={`w-full py-8 flex justify-center items-center font-light text-lg text-white border-b-2${
          isNotVisible ? ' hidden' : ''
        }`}
        id="defaultNav"
      >
        {navItems.map(({ title, url, style }) => (
          <a
            key={url}
            href={url}
            className={`hover:-translate-y-1 transition-transform ${style}`}
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
}
