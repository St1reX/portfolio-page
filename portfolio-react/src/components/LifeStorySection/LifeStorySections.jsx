import LifeStoryData from './LifeStoryData/LifeStoryData';

export default function LifeStorySection() {
  return (
    <div className="w-full px-32">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {LifeStoryData.map((record, index) => (
          <li className="group" key={record.title}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-main-green"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={
                index % 2 === 0
                  ? 'timeline-end md:mb-10'
                  : 'timeline-start mb-10 md:text-end'
              }
            >
              <time className="font-mono italic">{record.year}</time>
              <div className="text-lg font-black duration-500 group-hover:tracking-wider">
                {record.title}
              </div>
              {record.description}
            </div>
            <hr className="bg-zinc-800" />
          </li>
        ))}
      </ul>
    </div>
  );
}
