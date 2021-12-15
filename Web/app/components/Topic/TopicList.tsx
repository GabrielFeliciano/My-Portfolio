import Topic from './Topic';

interface TopicListProps {
    children: React.ReactNode;
}

export default function TopicList (props: TopicListProps) {
    return (
        <div className='snap-y'>
            { props.children }
        </div>
    );
}