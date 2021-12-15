import Topic from "@/components/Topic/Topic";
import Axios, { AxiosResponse } from "axios";
import { RepoDto } from "@/dto/Repo.dto";
import useSWR from 'swr'
import { validateSync } from "class-validator";
import { RepoListDto } from "@/dto/RepoList.dto";
import Project from "@/components/Project";

export default function Projects (props: any) {
    const { data, error } = useSWR<AxiosResponse<RepoListDto>>('/api/repo', Axios.get);
    const body = data?.data ?? {} as RepoListDto;
    const isValid = validateSync(data ?? {});
    console.log(body);

    return (
        <Topic title="Projetos" id="projects">
            <ul>
                {
                    (body.repos ?? []).map((repo: RepoDto) => (
                        <li key={repo.id}>
                            <Project repo={repo} />
                        </li>
                    ))
                }
            </ul>
        </Topic>
    );
}