import { useScroll, useTransform, m as motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";

const logos: Pick<ImageProps, "src"|"alt"|"width"|"height">[] = [
    {
        src: "/img/soton-logo.png",
        alt: "University of Southampton Logo",
        width: 221,
        height: 48
    },
    {
        src: "/img/iceline-logo.png",
        alt: "Iceline Hosting Logo",
        width: 245,
        height: 48
    }
]

function CompanyLogos(props: CompanyLogoProps) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start -0.5"] });
    const translateLeft = useTransform(scrollYProgress, [0, 1], [0, -200])
    const translateLeftFast = useTransform(scrollYProgress, [0, 1], [100, -200])
    const translateRight = useTransform(scrollYProgress, [0, 1], [0, 200])
    const translateRightFast = useTransform(scrollYProgress, [0, 1], [-100, 200])

    return (
        <div ref={ref} className={`${props.className ?? ''} flex items-center justify-center md:justify-between h-full overflow-x-hidden`}>
            <div className="h-full w-full md:w-auto flex flex-col justify-center space-y-4">
                <motion.div style={{translateX: translateLeft}} className="flex space-x-6 items-center justify-between">
                    <Image {...logos[0 % logos.length]} alt="" className="opacity-5 md:opacity-20"/>
                    <Image {...logos[1 % logos.length]} alt="" className="opacity-5 md:opacity-10"/>
                </motion.div>
                <motion.div style={{translateX: translateLeftFast}} className="flex space-x-6 items-center justify-between">
                    <Image {...logos[3 % logos.length]} alt="" className="opacity-5 md:opacity-20"/>
                    <Image {...logos[2 % logos.length]} alt="" className="opacity-5 md:opacity-10"/>
                </motion.div>
                <motion.div style={{translateX: translateLeft}} className="flex space-x-6 items-center justify-between">
                    <Image {...logos[4 % logos.length]} alt="" className="opacity-5 md:opacity-20"/>
                    <Image {...logos[5 % logos.length]} alt="" className="opacity-5 md:opacity-10"/>
                </motion.div>
            </div>
            <div className="h-full hidden md:flex flex-col justify-center space-y-4">
                <motion.div style={{translateX: translateRight}} className="flex space-x-6 items-center">
                    <Image {...logos[1 % logos.length]} alt="" className="opacity-10"/>
                    <Image {...logos[0 % logos.length]} alt="" className="opacity-20"/>
                </motion.div>
                <motion.div style={{translateX: translateRightFast}} className="flex space-x-6 items-center">
                    <Image {...logos[2 % logos.length]} alt="" className="opacity-10"/>
                    <Image {...logos[3 % logos.length]} alt="" className="opacity-20"/>
                </motion.div>
                <motion.div style={{translateX: translateRight}} className="flex space-x-6 items-center">
                    <Image {...logos[5 % logos.length]} alt="" className="opacity-10"/>
                    <Image {...logos[4 % logos.length]} alt="" className="opacity-20"/>
                </motion.div>
            </div>
        </div>
    );
}

type CompanyLogoProps = {
    className?: string;
}

export default CompanyLogos;