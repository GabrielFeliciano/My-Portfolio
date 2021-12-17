import { RepoDto } from "@/dto/Repo.dto";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import CustomAnchor from "./CustomAnchor/CustomAnchor";
import SliderTransition from "./SliderTransition";

export interface IProjectsProps {
    repo: RepoDto;
}

export default function Project ({ repo }: IProjectsProps) {
    const name = repo.name
        .trim()
        .replace(/\-+/, ' ')
        .toLowerCase()

    const buttonCl = "outline outline-amber-500 outline-[2px] text-center p-2 disabled:opacity-50";

    function onClickCodeFont() {
        window.open(repo.html_url);
    }

    return (
        <div className="shadow p-4 h-full flex flex-col">
            <h3 className="capitalize font-bold text-2xl">{name}</h3>
            <p className="flex-grow">{repo.description}</p>
            <div className="grid gap-[2px] border-amber-500 border-[2px] grid-cols-2 mt-2">
                <button onClick={onClickCodeFont} className={buttonCl}>Código fonte</button>
                <button disabled className={buttonCl}>Demo</button>
            </div>
        </div>
    );
}