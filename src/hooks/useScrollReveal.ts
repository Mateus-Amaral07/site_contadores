import { useEffect, useRef } from 'react';

/**
 * Hook to apply Intersection Observer for scroll-triggered "reveal" animations.
 * When the observed elements enter the viewport, the `.animate-visible` class is added.
 * 
 * Elements should start with the `.animate-hidden` class and a specific transform (e.g. `.fade-up`).
 * 
 * Works purely with CSS transitions defined in `index.css`.
 */
export function useScrollReveal(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    // Find all hidden elements inside the container
    const hiddenElements = currentRef.querySelectorAll('.animate-hidden');
    
    // If no children contain .animate-hidden, observe the container itself (useful if applied directly to an element)
    const elementsToObserve = hiddenElements.length > 0 ? Array.from(hiddenElements) : [currentRef];

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to trigger CSS transition
          entry.target.classList.add('animate-visible');
          
          // Unobserve after animating once (once: true behavior)
          obs.unobserve(entry.target);
        }
      });
    }, options);

    elementsToObserve.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elementsToObserve.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}
