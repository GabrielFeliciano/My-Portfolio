export interface TopicProps {
    id?: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export default function Topic (props: TopicProps) {
    const sectionClassName = `snap-start sm:px-12 md:px-20 lg:px-32 md:px-0 pb-12 ${props.className ?? ''}`;

    return (
        <section id={props.id} className={sectionClassName}>
            <h2 className="text-6xl font-bold text-center p-4 sticky top-0"> 
                {props.title}
            </h2> 
            { props.children }
        </section>
    );
}