import Badge from "@/components/Badge/Badge";
import Topic from "@/components/Topic/Topic";
import { badges } from "@/config/badges";

export default function Tecnology () {
    return (
        <Topic title="Tecnologias aprendidas">
            <p className="my-8 pb-4 text-2xl text-center pad">
                Abaixo está a lista de tecnologias que incluí <em>
                linguagens, ferramentas de desenvolvimento e programas
                </em> que eu aprendi durante meu tempo de estudo e tenho conhecimento básico.
            </p>
            <ul className="topic__tecnology--grid">
                { 
                    badges.map((badge, index) => (
                        <li key={index}>
                            <Badge { ...badge } />
                        </li>
                    )) 
                }
            </ul>
        </Topic>
    );
}