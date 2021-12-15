import { AnchorButton } from "@/types/anchor";
import { HTMLAttributes } from "react";

const CustomButton = ({ config }: { config: AnchorButton }) => {
    return (
        <a
            className="flex animate-pulse space-x-2 p-2 rounded-sm lg:text-xl select-none font-sans hover:scale-105"
            href={config.url}
        >
            <span className="flex items-center justify-center w-4">
                <i className={`${config.icon}`}></i>
            </span>
            <span>{config.text}</span>
        </a>
    )
}

interface AnchorMenuProps {
    buttons: AnchorButton[]
}

const AnchorMenu = ({ buttons }: AnchorMenuProps) => {
    return (
        <ul className={`inline-flex flex-col divide-y-2 divide-red-500`} >
            {
                buttons.map(
                    (config, index) =>
                        <CustomButton
                            config={config}
                            key={index}
                        />
                )
            }
        </ul>
    );
}

export default AnchorMenu;