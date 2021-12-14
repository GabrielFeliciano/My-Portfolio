import { RepoDto } from "@/dto/Repo.dto";

export interface IProjectsProps {
    repo: RepoDto;
}

export default function Project ({ repo }: IProjectsProps) {
    return (
        <div>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
        </div>
    );
}