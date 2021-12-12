export interface TopicProps {
    id?: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}

export default function Topic (props: TopicProps) {
    const sectionClassName = `snap-start ${props.className ?? ''}`;

    return (
        <section id={props.id} className={sectionClassName}>
            <h2 className="text-6xl font-bold text-center p-4 sticky top-0"> 
                {props.title}
            </h2> 
            { props.children ?? <div style={{height: 900, width: '100%' }} /> }
        </section>
    );
}