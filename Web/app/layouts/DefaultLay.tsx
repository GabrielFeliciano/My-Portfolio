export interface DefaultLayProps {
    children: React.ReactNode;
}

export default function DefaultLay (props: DefaultLayProps) {
    return (
        <div className="flex flex-col bg-gray-300">
            { props.children }
        </div>
    );
}