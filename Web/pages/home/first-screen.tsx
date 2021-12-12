import Image from 'next/image'
import AnchorMenu from '@component/AnchorMenu';
import { AnchorButton } from '@/types/anchor';

interface FirstScreenProps {
    img: string,
    title: string,
    menuButtons: AnchorButton[]
}
 
const FirstScreen = (props: FirstScreenProps) => {
    return (
        <section className='first-screen grid grid-cols-2 w-screen h-screen'>
            <div className='row-span-2'>
                <Picture img={props.img} />
            </div>
            <div>
                <h1 className='border-l-4 border-red-500 px-8 py-2 my-6 text-6xl font-bold'>
                    {props.title}
                </h1>
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
                    className='h-auto w-96 content-contain'
                    src={props.img}
                    alt="" 
                />
            </div>
        </div>
    )
}
 
export default FirstScreen;