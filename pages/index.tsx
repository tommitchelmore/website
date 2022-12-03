import Head from "next/head"
import Image from "next/image"

import Divider from "../components/Divider"
import Contact from "../components/sections/Contact"
import Experience from "../components/sections/Experience"

import Home from "../components/sections/Home"
import LatestPosts from "../components/sections/LatestPosts"
import MainLayout from "../layouts/MainLayout"

export default function HomePage() {
  return (
    <>
    <Head>
      <title>Thomas Mitchelmore</title>
      <meta name="description" content="MEng Computer Science student at the University of Southampton and Project Manager at Iceline Hosting. Based in Southampton, UK." />
      <meta name="og:title" content="Thomas Mitchelmore" />
      <meta name="og:description" content="MEng Computer Science student at the University of Southampton and Project Manager at Iceline Hosting. Based in Southampton, UK." />
      <meta name="twitter:title" content="Thomas Mitchelmore" />
      <meta name="twitter:description" content="MEng Computer Science student at the University of Southampton and Project Manager at Iceline Hosting. Based in Southampton, UK." />
      <meta name="theme-color" content="#0D406B" />
    </Head>
    <MainLayout>
      <div className="bg-gradient relative">
        <Image
          src="/svg/circles.svg"
          alt=""
          width={1920}
          height={1920}
          className="absolute top-0 inset-x-0 object-cover object-center"
          loading="eager"
        />
        <Home />
        <Experience />
        <Divider />
      </div>
      {/* <div className="bg-primary isolate">
        <LatestPosts />
        <Divider />
      </div> */}
      <div className="bg-primary isolate">
        <Contact />
      </div>
    </MainLayout>
    </>
  )
}
