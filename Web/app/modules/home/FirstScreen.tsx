import Image from 'next/image'
import AnchorMenu from '@component/AnchorMenu';
import { AnchorButton } from '@/types/anchor';
import SliderTransition from '@/components/SliderTransition';

interface FirstScreenProps {
    img: string,
    title: string,
    description: string,
    menuButtons: AnchorButton[]
}
 
const FirstScreen = (props: FirstScreenProps) => {
    return (
        <section className='text-gray-200 first-screen grid grid-cols-2 h-screen bg-gray-800'>
            <div className='row-span-2'>
                <Picture img={props.img} />
            </div>
            <div>
                <SliderTransition 
                    time={2}
                    sliderClassName='w-[.25rem]'
                    wrapper={{
                        className: 'my-4'
                    }}
                >
                    <h1 className='border-red-500 border-l-[.25rem] px-8 py-4 text-6xl font-bold'>
                        {props.title}
                    </h1>
                    <p className='p-8 text-xl'>{ props.description }</p>
                </SliderTransition>
            </div>
            <div>
                <AnchorMenu buttons={props.menuButtons} />
            </div>
        </section>
    );
}

function Picture (props: { img: string }) {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div 
                className='inline-block w-96 rounded-full overflow-hidden drop-shadow-sm shadow-orange-50/500'
                style={{animation: 'picture 3s ease-in-out'}}
            >
                <img 
                    className='h-auto content-contain select-none bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
                    src={props.img}
                    alt="" 
                />
            </div>
        </div>
    )
}
 
export default FirstScreen;