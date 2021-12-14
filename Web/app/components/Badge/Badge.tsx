export interface BadgeProps {
    text: string;
    icon: string;
}

export default function Badge (props: BadgeProps) {
    return (
        <div className="py-4 border-amber-500 border-b-4 text-amber-500 hover:scale-110 shadow hover:shadow-xl">
            <i className={`${props.icon} text-6xl text-center block drop-shadow-xl`}></i>
            <p className="block font-bold text-center text-xl select-none">{ props.text }</p>
        </div>
    );
}