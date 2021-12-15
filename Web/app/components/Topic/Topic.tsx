export interface TopicProps {
    id?: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export default function Topic (props: TopicProps) {
    const sectionClassName = `snap-start lg:px-32 md:px-20 px-8 sm:px-8 pb-12 ${props.className ?? ''}`;

    return (
        <section id={props.id} className={sectionClassName}>
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold text-center p-4 top-0"> 
                {props.title}
            </h2> 
            { props.children }
        </section>
    );
}