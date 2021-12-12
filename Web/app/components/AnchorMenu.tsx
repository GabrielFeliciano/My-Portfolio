import { AnchorButton } from "@/types/anchor";

const CustomButton = ({ config }: { config: AnchorButton }) => {
    return (
        <a
            className="flex space-x-2 p-2 rounded-sm text-xl select-none font-sans hover:scale-105"
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
        <ul className="inline-flex flex-col divide-y-2 divide-red-500 mr-auto">
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