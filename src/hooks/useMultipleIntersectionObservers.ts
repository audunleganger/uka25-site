import { useEffect, useRef, useState } from "react";

export function useMultipleIntersectionObservers(
    options: IntersectionObserverInit
) {
    const [isIntersecting, setIsIntersecting] = useState<boolean[]>([]);
    const refs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        refs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(([entry]) => {
                setIsIntersecting((prev) => {
                    const newState = [...prev];
                    newState[index] = entry.isIntersecting;
                    return newState;
                });
            }, options);

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer, index) => {
                if (refs.current[index]) {
                    observer.unobserve(refs.current[index]!);
                }
            });
        };
    }, [options]);

    return [refs, isIntersecting] as const;
}
