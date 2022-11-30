import Card from "./Card";

function ExperienceCard(props: ExperienceCardProps) {
    return (
        <Card>
            <div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <h3 className="text-title font-bold gradient-text">{ props.company }</h3>
                    <span className="text-text lg:text-subtitle font-medium">{ props.startDate } - { props.endDate }</span>
                </div>
                <span className="text-text lg:text-left text-subtitle font-medium">{ props.jobTitle } ({ props.contractType }) - { props.location }</span>
            </div>
            <ul className="list-disc list-inside">
                { props.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-text">{ responsibility }</li>
                ))}
            </ul>
        </Card>
    );
}

type ExperienceCardProps = {
    company: string;
    jobTitle: string;
    contractType: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export type { ExperienceCardProps };
export default ExperienceCard;