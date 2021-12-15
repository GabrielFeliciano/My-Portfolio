import { Children } from "react";

export interface TopicProps {
    id?: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export default function Topic (props: TopicProps) {
    const hideWhenChildrenEmpty = Children.count(props.children) === 0 ? 'hidden' : '' ;
    const sectionClassName = `snap-start lg:px-32 md:px-20 px-8 sm:px-8 pb-12 ${hideWhenChildrenEmpty} ${props.className ?? ''}`;

    return (
        <section id={props.id} className={sectionClassName}>
            <h2 className={`${hideWhenChildrenEmpty} lg:text-6xl md:text-5xl text-4xl font-bold text-center p-4 top-0`}> 
                {props.title}
            </h2> 
            { props.children }
        </section>
    );
}