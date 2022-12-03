import type { ExperienceCardProps } from "../../components/ExperienceCard"
import ExperienceCard from "../../components/ExperienceCard"
import { RiFlashlightLine } from "react-icons/ri"
import CompanyLogos from "../../components/CompanyLogos"
import { useEffect, useRef } from "react"
import { useScroll, motion, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

const experience: ExperienceCardProps[] = [
    {
        company: "Iceline Hosting",
        jobTitle: "Project Manager",
        contractType: "Contract",
        location: "Remote",
        startDate: "September 2022",
        endDate: "Present",
        responsibilities: [
            "Lead role in overseeing development of new products and services.",
            "Development of strategy, product specifications and design guidelines.",
            "Use of experience to make key archiectural and operational decisions."
        ]
    },
    {
        company: "University of Southampton",
        jobTitle: "Summer Research Associate",
        contractType: "Internship",
        location: "Southampton, UK",
        startDate: "June 2022",
        endDate: "September 2022",
        responsibilities: [
            "Investigation of how commuter journey analysis can provide insights into city public infrastructure.",
            "Production of a React data-collection app, involving geospatial and temporal data."
        ]
    },
    {
        company: "Iceline Hosting",
        jobTitle: "Software Engineer",
        contractType: "Contract",
        location: "Remote",
        startDate: "April 2021",
        endDate: "September 2022",
        responsibilities: [
            "Production of customer-facing and internal web applications using VueJS.",
            "Assisted in building a new, dynamic company website.",
            "Produced a full IP address and server control system with a major industry partner&apos;s API."
        ]
    },
    {
        company: "Iceline Hosting",
        jobTitle: "Support Operator and Systems Administrator",
        contractType: "Contract",
        location: "Remote",
        startDate: "July 2020",
        endDate: "December 2020",
        responsibilities: [
            "Providing technical support through a support ticketing system.",
            "Assisted in the design of a network-wide backup system."
        ]
    }
]

function Experience() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({target: ref, offset: ["start end", "start -0.3"]})
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    
    return (
        <section id="experience" ref={ref} className="relative">
            <div className="relative z-10">
                <div className="relative grid place-items-center overflow-x-hidden">
                    <motion.div style={{scale}} className="relative z-10 max-w-lg text-center grid place-items-center space-y-2 px-6">
                        <RiFlashlightLine size={64} className="text-accent" />
                        <h2 className="text-heading font-bold gradient-text">Experience</h2>
                        <p className="text-text text-subtitle font-medium">
                            I have over 6 years of experience in Web Development, Project Management and UI/UX Design.
                        </p>
                    </motion.div>
                    <CompanyLogos className="absolute inset-0" />
                </div>
                <div className="container mx-auto py-16 md:py-24 lg:py-32 grid gap-6 md:gap-12 px-6">
                    {experience.map((e, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9}}
                            whileInView={{ opacity: 1, scale: 1, offset: "0, 0.3" }}
                            viewport={{amount: 0.5}}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ExperienceCard
                                {...e}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <Image className="absolute z-0 inset-0 object-center object-contain opacity-30 h-full w-full"
                src="/img/grid.png"
                alt=""
                width={2722}
                height={1807}
            />
        </section>
    );
}

export default Experience;