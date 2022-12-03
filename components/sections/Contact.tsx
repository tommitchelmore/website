import Card from "../Card";
import { RiGlobalLine as Icon, RiGithubFill, RiLinkedinFill, RiDiscordFill } from "react-icons/ri"
import { m as motion } from "framer-motion"
import Image from "next/image"

function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="relative z-10 container mx-auto py-16 md:py-24 lg:py-32 grid gap-6 md:gap-12 px-6">
                <h2 className="text-heading font-bold gradient-text text-center">Contact</h2>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="space-y-2 max-w-lg lg:max-w-sm xl:max-w-lg">
                        <h3 className="text-title font-bold gradient-text">
                            Let&apos;s chat!
                        </h3>
                        <p className="text-text">
                            The best way to reach me is via email, but I&apos;d love to connect on social media! I am not currently undertaking freelance work, but I am always open to new opportunities.
                        </p>
                    </div>
                    <motion.div
                        className="flex-grow max-w-lg w-full lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.9}}
                        whileInView={{ opacity: 1, scale: 1, offset: "0, 0.3" }}
                        viewport={{amount: 0.5}}
                        transition={{ duration: 0.8, ease: "backInOut" }}
                    >
                        <Card className="w-full">
                            <div className="flex justify-between">
                                <div className="mb-8">
                                    <h3 className="text-title font-bold gradient-text">Thomas Mitchelmore</h3>
                                    <p className="text-text font-medium text-subtitle">Project Manager</p>
                                </div>
                                <Icon size={36} className="hidden md:block ml-6 text-accent" />
                            </div>
                            <a href="mailto:hello@mitchelmore.dev" className="text-subtitle gradient-accent-text drop-shadow-xl">hello@mitchelmore.dev</a>
                            <div className="flex gap-6">
                                <a href="https://github.com/tommitchelmore" target="_blank" rel="noreferrer" className="text-text hover:text-white transition-colors">
                                    <span className="sr-only">Github</span>
                                    <RiGithubFill size={36} />
                                </a>
                                <a href="https://www.linkedin.com/in/tommitchelmore/" target="_blank" rel="noreferrer" className="text-text hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <RiLinkedinFill size={36} />
                                </a>
                                <a href="https://discord.com/users/181372740349984768" target="_blank" rel="noreferrer" className="text-text hover:text-white transition-colors">
                                    <span className="sr-only">Discord</span>
                                    <RiDiscordFill size={36} />
                                </a>
                            </div>
                        </Card>
                    </motion.div>
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

export default Contact;