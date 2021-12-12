import Image from 'next/image'
import AnchorMenu from '@component/AnchorMenu';
import { AnchorButton } from '@/types/anchor';
import SliderTransition from '@/components/SliderTransition';

interface FirstScreenProps {
    img: string,
    title: string,
    menuButtons: AnchorButton[]
}
 
const FirstScreen = (props: FirstScreenProps) => {
    return (
        <section className='first-screen grid grid-cols-2 w-screen h-screen bg-gray-200 bg-gradient-to-br from-green-200 to-purple-200'>
            <div className='row-span-2'>
                <Picture img={props.img} />
            </div>
            <div>
                <SliderTransition 
                    time={2}
                    wrapper={{
                        className: 'my-6',
                    }}
                >
                    <h1 className='border-red-500 border-l-4 px-8 py-2 text-6xl font-bold'>
                        {props.title}
                    </h1>
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
            <div className='inline-block rounded-full overflow-hidden'>
                <img 
                    className='h-auto w-96 content-contain select-none bg-gradient-to-r from-cyan-500 to-blue-500'
                    src={props.img}
                    alt="" 
                />
            </div>
        </div>
    )
}
 
export default FirstScreen;