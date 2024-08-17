import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options: IntersectionObserverInit) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isIntersecting] as const;
}
