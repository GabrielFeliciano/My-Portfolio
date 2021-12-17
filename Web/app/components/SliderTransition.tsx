import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface SliderTransitionProps {
    wrapper?: HTMLAttributes<HTMLDivElement>,
    sliderClassName?: string,
    children?: ReactNode,
    time: number,
    useInViewOptions?: IntersectionOptions,
    shouldAnimate?: boolean
}

const SliderTransition = (props: SliderTransitionProps) => {
    const { children, sliderClassName, wrapper, time, shouldAnimate, useInViewOptions } = props;

    const [isTransiting, setTransiting] = useState(true);
    const [slider, sliderInView] = useInView(useInViewOptions ?? {
        triggerOnce: false
    });
    
    const animationValue = shouldAnimate != null ? shouldAnimate : sliderInView;

    const wrapperWithDefaults = {
        ref: slider,
        ...wrapper,
        className: `relative overflow-hidden inline-block ${wrapper?.className || ''}`
    };

    return (
        <div {...wrapperWithDefaults}>
            {/* Slider */}
            <div 
                className={`absolute bg-red-500 w-1 -translate-x-1 h-full ${sliderClassName}`} 
                style={animationValue ? { animation: `track1 ${time}s` } : {}}
            />

            {/* Track 1: Moves track 2 from end to beginning relative to left */}
            <div 
                onAnimationEnd={() => setTransiting(false)} 
                className='relative overflow-hidden'
                style={animationValue ? { animation: `track1 ${time}s` } : {}}
            >
                {/* Track 2: Offsets children 'origin' position */}
                {/* Origin start at right and goes to left */}
                <div 
                    className='relative'
                    style={animationValue ? { animation: `track2 ${time}s` } : {}}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SliderTransition;