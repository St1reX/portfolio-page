export default function Header() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="p-4 bg-glass-gray font-Kanit font-light text-lg text-white">
          <ul className="flex">
            <li className="mr-3">
              <a href="#aboutMe">About Me</a>
            </li>
            <li className="mr-3">
              <a href="#mySkills">My Skills</a>
            </li>
            <li className="mr-3">
              <a href="#myProjects">My projects</a>
            </li>
            <li>
              <a href="#myGoals">My Goals</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
