import Topic from "@/components/Topic/Topic";
import { RepoDto } from "@/dto/Repo.dto";
import Project from "@/components/Project";
import { useSWRAxios } from "@/fetcher";
import Awaiter from "@/components/Awaiter";
import SliderTransition from "@/components/SliderTransition";

export default function Projects (props: any) {
    const { response, error } = useSWRAxios<RepoDto[]>('/api/repo');
    const data = response?.data ?? [];

    return (
        <Topic title="Projetos" id="projects">
            <p className="my-8 pb-4 lg:text-2xl text-lg text-center pad">
                Aqui você pode ver alguns projetos selecionados que eu trabalhei.
            </p>
            <Awaiter
                data={response}
                onLoad={
                    ({ data }) => (
                        <SliderTransition 
                            time={1}
                            wrapper={{
                                className: 'block w-full'
                            }}
                            useInViewOptions={{ triggerOnce: true }}
                        >
                            <ul className="p-2 grid grid-cols-2 gap-4">
                                {
                                    data.map((repo: RepoDto) => (
                                        <li key={repo.id}>
                                            <Project repo={repo} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </SliderTransition>
                    )
                }
            />
        </Topic>
    );
}