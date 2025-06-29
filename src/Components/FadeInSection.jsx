import React, { useRef, useEffect, useState } from 'react';

const FadeInSection = ({ children, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-[-50px]';
      case 'right':
        return 'translate-x-[50px]';
      case 'up':
        return 'translate-y-[-50px]';
      case 'down':
        return 'translate-y-[50px]';
      default:
        return '';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${getDirectionClass()}`
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
