import { useScroll, useTransform, m as motion } from "framer-motion";
import { useRef } from "react";

function Divider() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0.5 1", "1 0.8"] })
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <div ref={ref} className="h-24 md:h-40 lg:h-72 relative">
            <motion.div style={{opacity}} className="absolute inset-0 blur-divider">
                <div className="w-full h-full bg-haze-gradient clip-haze"></div>
            </motion.div>
            <div className="absolute inset-0 bg-primary clip-divider"></div>
        </div>
    );
}

export default Divider;