import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { ArrowDownIcon } from '@heroicons/react/16/solid';

export default function AnimatedBanner() {
  const headerTyper = useRef(null);

  useEffect(() => {
    const t1 = new Typed(headerTyper.current, {
      strings: [
        'Coding',
        'Developing',
        'Debugging',
        'Deploying',
        'Collaborating',
        'Learning',
        'Building',
        'Designing',
        'Optimizing',
        'Testing',
        'Refactoring',
        'Debugging',
        'Automating',
        'Scaling',
        'Creating',
        'Integrating',
        'Coding Solutions',
        'Innovating',
        'Problem Solving',
        'Engineering',
        'Collaborating',
        'Analyzing',
        'Learning',
        'Improving',
        'Architecting',
        'Deploying',
      ],
      typeSpeed: 225,
      backDelay: 800,
      backSpeed: 70,
      shuffle: false,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      contentType: 'null',
      preStringTyped: () => {
        const cursor = document.querySelector('.typed-cursor');
        cursor.classList.add('text-8xl', 'select-none');
      },
    });

    return () => {
      t1.destroy();
    };
  }, []);

  return (
    <div className="flex content-center justify-center font-JetBrains">
      <div className="flex flex-col items-center gap-4">
        <div className="flex mb-6">
          <h2
            ref={headerTyper}
            className="text-main-green text-8xl font-extrabold min-h-24 select-none"
          ></h2>
        </div>
        <p className="text-xl mb-20">
          Programming for me is something more than just writing code... Here my
          own playground starts.
        </p>
        <button className="btn btn-outline">
          <a href="#">Show more</a>
          <ArrowDownIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
