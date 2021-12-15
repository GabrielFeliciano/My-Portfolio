import Badge from "@/components/Badge/Badge";
import Topic from "@/components/Topic/Topic";
import { badges } from "@/config/badges";

export default function Tecnology () {
    // 'grid-cols-[repeat(auto-fit,minmax(40px,80px))] lg:grid-cols-[repeat(auto-fit,minmax(80px,120px))]'
    return (
        <Topic title="Tecnologias aprendidas" id="tecnology">
            <p className="my-8 pb-4 lg:text-2xl text-lg text-center pad">
                Abaixo está a lista de tecnologias que incluí <em>
                linguagens, ferramentas de desenvolvimento e programas
                </em> que eu aprendi durante meu tempo de estudo e tenho conhecimento básico.
            </p>
            <ul 
                className="flex flex-wrap justify-evenly gap-x-2 gap-y-4 lg:gap-4 grid-cols-[repeat(auto-fill,1fr)]"
                // style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 120px))' }}
            >
                {   
                    badges.map((badge, index) => (
                        <li key={index} className="flex-grow">
                            <Badge { ...badge } />
                        </li>
                    )) 
                }
            </ul>
        </Topic>
    );
}