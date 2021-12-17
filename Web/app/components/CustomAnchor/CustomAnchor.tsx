import { AnchorButton } from "@/types/anchor";
import { MouseEventHandler } from "react";

function buildOnClick(url: string) {

    if (url.startsWith('#')) {

        return (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const anchor = document.querySelector(url);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth' });
            }
        };

    } else {

        return (e: React.MouseEvent<HTMLAnchorElement>) => {
            window.location.href = url;
        };

    }

}

export default function CustomButton (props: AnchorButton) {
    return (
        <a
            className="flex animate-pulse space-x-2 p-2 rounded-sm lg:text-xl select-none font-sans hover:scale-105"
            onClick={buildOnClick(props.url ?? '')}
            href={props.url}
        >
            <span className="flex items-center justify-center w-4">
                <i className={`${props.icon}`}></i>
            </span>
            <span>{props.text}</span>
        </a>
    )
}
