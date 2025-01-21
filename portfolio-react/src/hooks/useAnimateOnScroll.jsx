import { useEffect, useRef, useState } from 'react';

export default function useAnimateOnScroll(threshold, hookMode) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (hookMode == 'over') {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        } else if (hookMode == 'below') {
          if (!entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}
