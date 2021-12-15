import { AnchorButton } from "@/types/anchor";
import CustomButton from "./CustomAnchor";

interface AnchorMenuProps {
    buttons: AnchorButton[]
}

export default function AnchorMenu ({ buttons }: AnchorMenuProps) {
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