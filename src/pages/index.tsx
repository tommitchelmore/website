import socials from "@/data/socials";
import { IconContext } from "react-icons";
import Image from "next/image";

function Index() {
  return (
    <div className="w-screen h-screen bg-radial-gradient grid place-content-center px-6 relative">
      <main className="bg-card backdrop-blur-md border border-stroke max-w-lg rounded-xl overflow-hidden relative z-10">
        <div className="w-full h-64 relative">
          <Image
            src="/image/me.jpeg"
            alt="Thomas Mitchelmore"
            fill
            className="object-cover"
            style={{
              filter: "sepia(1) hue-rotate(160deg) saturate(0.5) contrast(1.2)"
            }}
            loading="eager"
          />
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h1>Thomas Mitchelmore</h1>
            <h2>
              Project Manager at <a href="https://iceline-hosting.com/" target="_blank">Iceline Hosting</a>.
            </h2>
          </div>
          <p>
            With over 6 years of experience in the industry, I&apos;m a web designer and frontend developer that&apos;s passionate about creating beautiful, responsive sites that are a joy to use.
          </p>
          <p className="font-medium">
            <a href="mailto:hello@mitchelmore.dev">hello@mitchelmore.dev</a>
          </p>
          <div className="flex gap-4">
            <IconContext.Provider value={{size: "24"}}>
              {socials.map(({ name, url, icon: Icon }, index) => (
                <a href={url} target="_blank" key={index} className="text-light/70 hover:text-light">
                  <span className="sr-only">{name}</span>
                  <Icon />
                </a>
              ))}
            </IconContext.Provider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;