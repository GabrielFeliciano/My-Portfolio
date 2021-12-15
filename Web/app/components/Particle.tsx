interface ParticleProps {
    className?: string;
}

export default function Particle (props: ParticleProps) {
    return (
        <div 
            className={`absolute rounded-full bg-gray-200 h-12 w-12 ${props.className}`}
        />
    );
}