function Card(props: CardProps) {
    return (
        <div className={`p-12 space-y-6 rounded-3xl bg-card-gradient border-2 border-card-border backdrop-blur-card shadow-2xl shadow-accent/5 ${props.className ?? ''}`}>
            {props.children}
        </div>
    );
}

type CardProps = {
    className?: string;
    children?: React.ReactNode;
}

export default Card;