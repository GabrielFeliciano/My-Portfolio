export interface DefaultLayProps {
    children: React.ReactNode;
}

export default function DefaultLay (props: DefaultLayProps) {
    return (
        <div className="flex flex-col bg-gray-700 text-gray-200">
            { props.children }
        </div>
    );
}