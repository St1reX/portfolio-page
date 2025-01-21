import { useEffect, useState } from 'react';

export default function useAnimateDocumentTitle() {
  const pageTitles = [
    '🏗️ Building the Web, One Pixel at a Time',
    '🚀 Welcome to My Dev Universe',
    '⚡ Coding Magic Happens Here',
    '🎨 Design. Code. Repeat.',
    '💻 Debugging Life Since 2007',
    '🛠️ Full-Stack Wizardry Awaits',
    '🎉 Enter the Web Dev Zone',
    '🤓 Typing Away at Dreams',
    '🌐 Bringing Ideas to Life',
    '👨‍💻 Ctrl + Save My Portfolio',
    '🤖 Writing Code, Drinking Coffee',
    '📂 Organizing Chaos into Code',
    '✨ The Art of Clean Code',
    '🔥 Breaking the Internet (Gently)',
    '🔧 HTML, CSS, JS, Repeat',
    '💡 Ideas Turned Into Reality',
    '🐛 Debugging the Debugs',
    '🎵 Coding to the Beat of Creativity',
    '🌀 Looped into Innovation',
    '⏳ Loading... Web Awesomeness',
    '📜 Stories Told in Code',
    '🌟 Stardust and JavaScript',
    '🧩 Piecing Together the Web',
    '🎢 Welcome to My Dev Rollercoaster',
    '🌈 Where Code Meets Creativity',
  ];

  const separator = '/**/';

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let tempTitle = '';

    const interval = setInterval(() => {
      const currentTitle = pageTitles[titleIndex];
      if (charIndex < currentTitle.length) {
        tempTitle += currentTitle[charIndex];
        document.title = tempTitle + separator;
        charIndex++;
      } else {
        titleIndex = (titleIndex + 1) % pageTitles.length;
        charIndex = 0;
        tempTitle = '';
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
