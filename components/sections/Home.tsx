import Button from "../Button";
import { RiAccountCircleFill, RiGithubFill } from "react-icons/ri"
import Link from "next/link";

function Home() {
    return (
        <section id="home" className="container mx-auto py-32 md:py-48 lg:py-64 px-6 grid gap-8 place-items-center relative">
            <div className="text-center space-y-4 grid place-items-center">
                <h1 className="text-display font-bold gradient-text">Thomas<br />Mitchelmore</h1>
                <p className="text-subtitle text-text font-medium max-w-lg lg:max-w-xl xl:max-w-3xl">MEng Computer Science student at the University of Southampton and Project Manager at Iceline Hosting. Based in Southampton, UK.</p>
            </div>
            <div className="flex space-x-4">
                <Button
                    icon={<RiAccountCircleFill />}
                    as={Link}
                    href="#experience"
                >
                    Experience
                </Button>
                <Button
                    icon={<RiGithubFill />}
                    variant="outlined"
                    as="a"
                    href="https://github.com/tommitchelmore"
                    target="_blank"
                >
                    GitHub
                </Button>
            </div>
        </section>
    );
}

export default Home;