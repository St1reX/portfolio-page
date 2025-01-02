export default function Header() {
  const navItems = [
    { title: 'Introduction', url: '#introduction', style: 'mr-7' },
    { title: 'Skills', url: '#Skills', style: 'mr-7' },
    { title: 'Projects', url: '#Projects', style: 'mr-7' },
    { title: 'Goals', url: '#goals', style: '' },
  ];

  return (
    <div className="w-full px-24 mb-40">
      <nav className="w-full py-8 flex justify-center items-center font-light text-lg text-white border-b-2">
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
