import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface SliderTransitionProps {
    wrapper?: HTMLAttributes<HTMLDivElement>,
    slider?: HTMLAttributes<HTMLDivElement>,
    children?: ReactNode,
    time: number
}

const SliderTransition = (props: SliderTransitionProps) => {
    const { children, wrapper, slider } = props;

    const wrapperWithDefaults = {
        ...wrapper,
        className: `relative inline-block ${wrapper?.className ?? ''}`
    };

    const sliderWithDefaults = {
        ...slider,
        className: `absolute top-0 left-0 w-full h-full animate-[reduce_${props.time}s_ease-in-out_forwards] ${slider?.className ?? ''}`
    }

    return (
        <div {...wrapperWithDefaults}>
            { children }
            <div {...sliderWithDefaults} />
        </div>
    );
}

export default SliderTransition;