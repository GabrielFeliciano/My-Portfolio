import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";

interface SliderTransitionProps {
    wrapper?: HTMLAttributes<HTMLDivElement>,
    children?: ReactNode,
    time: number
}

const SliderTransition = (props: SliderTransitionProps) => {
    const [isTransiting, setTransiting] = useState(true);

    const { children, wrapper, time } = props;

    const wrapperWithDefaults = {
        ...wrapper,
        className: `relative overflow-hidden inline-block ${wrapper?.className || ''}`
    };

    // styles
    const track1 = `relative overflow-hidden animate-[track1_${time}s]`
    const track2 = `relative animate-[track2_${time}s]`

    return (
        <div {...wrapperWithDefaults}>
            {/* Slider */}
            <div className={`absolute bg-red-500 w-1 -translate-x-1 h-full animate-[track1_${time}s]`}></div>

            {/* Track 1: Moves track 2 from end to beginning relative to left */}
            <div 
                onAnimationEnd={() => setTransiting(false)} 
                className={track1}
            >
                {/* Track 2: Offsets children 'origin' position */}
                {/* Origin start at right and goes to left */}
                <div className={track2}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SliderTransition;