import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";

interface SliderTransitionProps {
    wrapper?: HTMLAttributes<HTMLDivElement>,
    sliderClassName?: string,
    children?: ReactNode,
    time: number
}

const SliderTransition = (props: SliderTransitionProps) => {
    const [isTransiting, setTransiting] = useState(true);

    const { children, sliderClassName, wrapper, time } = props;

    const wrapperWithDefaults = {
        ...wrapper,
        className: `relative overflow-hidden inline-block ${wrapper?.className || ''}`
    };

    return (
        <div {...wrapperWithDefaults}>
            {/* Slider */}
            <div 
                className={`absolute bg-red-500 w-1 -translate-x-1 h-full ${sliderClassName}`} 
                style={{ animation: `track1 ${time}s` }}
            />

            {/* Track 1: Moves track 2 from end to beginning relative to left */}
            <div 
                onAnimationEnd={() => setTransiting(false)} 
                className='relative overflow-hidden'
                style={{ animation: `track1 ${time}s` }}
            >
                {/* Track 2: Offsets children 'origin' position */}
                {/* Origin start at right and goes to left */}
                <div 
                    className='relative'
                    style={{ animation: `track2 ${time}s` }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SliderTransition;