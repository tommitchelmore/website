import Typography from '@components/Typography';
import { Component, For } from 'solid-js';

export type ExperienceItemProps = {
    class?: string;
    company: string;
    job: string;
    type: string;
    start: string;
    end: string;
    description: string[];
}

const ExperienceItem: Component<ExperienceItemProps> = (props) => {
    return (
        <div class={`${props.class ?? ''} space-y-4`}>
            <div class='flex justify-between'>
                <Typography variant='title'>{props.company}</Typography>
                <Typography tag='span'>{props.start} - {props.end}</Typography>
            </div>
            <Typography class="italic">{props.job} - {props.type}</Typography>
            <ul class='list-disc list-inside space-y-2'>
                <For each={props.description}>{item => (
                    <Typography tag='li'>{item}</Typography>
                )}</For>
            </ul>
        </div>
    );
}

export default ExperienceItem;
