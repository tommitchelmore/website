import NavigationItem from "./NavigationItem";
import Link from "next/link";
import { useScroll, m as motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";
import { RiMenuLine as MobileToggle, RiGithubFill, RiLinkedinFill, RiDiscordFill } from "react-icons/ri"

function Navigation() {
    const [mobileNav, setMobileNav] = useState(false);
    const openMobileNav = () => setMobileNav(true);
    const closeMobileNav = () => setMobileNav(false);

    const { scrollY } = useScroll({ offset: [] })
    const [pos, setPos] = useState<{ value: number, previous: number, delta: number }>({
        value: 0,
        previous: 0,
        delta: 0
    })

    const updateScroll = (value: number) => {
        const previous = scrollY.getPrevious() || 0
        setPos({
            value: value,
            previous: previous,
            delta: value - previous
        })
    }
    scrollY.onChange(updateScroll)

    const classes = classNames({
        "fixed top-0 inset-x-0 z-30 bg-transparent transition-[background,box-shadow,top] duration-500": true,
        "bg-white/05 backdrop-blur-nav shadow-white/5 shadow-lg border-b border-b-card-border/10": pos?.value > 200,
        "top-[-64px]": pos?.delta > 0 && pos?.value > 100,
    })

    return (
        <>
        <motion.nav className={classes}>
            <div className="container mx-auto px-6 h-16 flex justify-between items-center">
                <Link href="/" className="text-title gradient-text font-bold">
                    TM
                </Link>
                <ul className="hidden lg:flex space-x-6">
                    <NavigationItem as={Link} href="/">
                        Home
                    </NavigationItem>
                    <NavigationItem as={Link} href="/#experience">
                        Experience
                    </NavigationItem>
                    <NavigationItem as={Link} href="/#contact">
                        Contact
                    </NavigationItem>
                </ul>
                <button className="block lg:hidden" onClick={openMobileNav}>
                    <span className="sr-only">Open Navigation</span>
                    <MobileToggle size={36} className="text-text active:text-white" />
                </button>
            </div>
        </motion.nav>
        <AnimatePresence>
            {mobileNav && (
                <motion.nav
                    className="fixed inset-y-0 w-64 z-50 bg-primary flex flex-col items-center py-32"
                    onPan={(e, info) => {
                        if (info.offset.x > 40) {
                            closeMobileNav();
                        }
                    }}
                    initial={{ right: "-100%" }}
                    animate={{ right: 0 }}
                    exit={{ right: "-100%" }}
                    transition={{ type: "tween", ease: "easeOut"}}
                >
                    <Link href="/" className="text-display font-bold gradient-text">
                        TM
                    </Link>
                    <ul className="flex flex-col space-y-6 mt-8 text-center">
                        <NavigationItem as={Link} href="/">
                            Home
                        </NavigationItem>
                        <NavigationItem as={Link} href="/#experience">
                            Experience
                        </NavigationItem>
                        <NavigationItem as={Link} href="/#contact">
                            Contact
                        </NavigationItem>
                    </ul>
                    <div className="mt-auto flex flex-col items-center gap-6">
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
                </motion.nav>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {mobileNav && (
                <motion.div
                    className="fixed inset-0 z-40 bg-primary-alt/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeMobileNav}
                >

                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

export default Navigation;