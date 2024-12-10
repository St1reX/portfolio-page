export default function Header() {
  return (
    <>
      <div className="w-full px-24 mb-40">
        <nav className="w-full py-8 flex justify-center items-center font-JetBrains font-light text-lg text-white border-b-2">
          <ul className="flex ">
            <li className="mr-7 hover:-translate-y-1 transition-transform">
              <a href="#aboutMe">Introduction</a>
            </li>
            <li className="mr-7 hover:-translate-y-1 transition-transform">
              <a href="#mySkills">Skills</a>
            </li>
            <li className="mr-7 hover:-translate-y-1 transition-transform">
              <a href="#myProjects">Projects</a>
            </li>
            <li className="hover:-translate-y-1 transition-transform">
              <a href="#myGoals">Goals</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
