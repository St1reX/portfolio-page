import { use } from 'react';
import { useEffect, useState } from 'react';

export default function useAnimateOnScroll() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useState(null)[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return [ref, isVisible];
}
