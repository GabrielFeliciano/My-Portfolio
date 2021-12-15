/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import AnchorMenu from '@component/AnchorMenu';
import { AnchorButton } from '@/types/anchor';
import SliderTransition from '@/components/SliderTransition';
import { useInView } from 'react-intersection-observer';

interface FirstScreenProps {
    img: string,
    title: string,
    description: string,
    menuButtons: AnchorButton[]
}
 
const FirstScreen = (props: FirstScreenProps) => {
    const [firstScreen, firstScreenInView] = useInView({
        triggerOnce: false
    });

    return (
        <section 
            ref={firstScreen} 
            className='first-screen flex flex-col px-8 md:grid gap-8 grid-cols-2 grid-rows-2 h-screen text-gray-200 bg-gray-800'
        >
            {/* Picture */}
            <div className='hidden order-2 md:order-1 md:flex items-center justify-center relative md:row-span-2 md:order-1 md:bg-none bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>
                <div 
                    className='w-96 md:h-auto rounded-full overflow-hidden'
                    style={firstScreenInView ? {animation: 'picture 1.5s ease-in-out forwards'} : {}}
                >
                    <img 
                        className='h-full w-auto content-contain select-none from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-br'
                        src={props.img}
                        alt="" 
                    />
                </div>
            </div>
            {/* Text and title */}
            <div className='order-1 md:order-2'>
                <SliderTransition 
                    time={2}
                    sliderClassName='w-[.25rem]'
                    wrapper={{
                        className: 'my-4'
                    }}
                    shouldAnimate={firstScreenInView}
                >
                    <div className='flex'>
                        <img 
                            className='h-32 w-auto rounded-lg md:hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
                            src={props.img}
                            alt="" 
                        />
                        <h1 className='inline-block flex-grow border-red-500 py-4 text-center md:text-left text-4xl font-bold md:border-l-[.25rem] md:px-8 md:text-5xl'>
                            {props.title}
                        </h1>
                    </div>
                    <p className='md:px-8 p-2 border-red-500 border-b-[.25rem] text-xl md:border-b-0 md:text-md lg:text-xl'>{ props.description }</p>
                </SliderTransition>
            </div>
            {/* Menu */}
            <div className='flex order-3 justify-center items-center row-span-2 md:justify-start md:row-span-0'>
                <AnchorMenu buttons={props.menuButtons} />
            </div>
        </section>
    );
}
 
export default FirstScreen;