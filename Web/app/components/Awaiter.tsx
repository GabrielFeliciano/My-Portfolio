interface AwaiterProps<T> {
    data: T|undefined;
    onLoad: (arg0: T) => JSX.Element;
    children?: React.ReactNode;
}

export default function Awaiter<T> (props: AwaiterProps<T>) {
    if (props.data !== undefined) {
        return (
            <> { props.onLoad(props.data) } </>
        )
    } else {
        return (
            <div className="h-32 flex items-center justify-center">
                <p className="text-7xl text-center text-bold">Carregando</p>
                {props.children}
            </div>
        );
    }
}