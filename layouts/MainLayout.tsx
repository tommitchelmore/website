import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";

function MainLayout(props: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>Thomas M.</title>
            </Head>
            <>
                <Navigation />
                <main className="relative">
                    {props.children}
                </main>
                <Footer />
            </>
        </>
    );
}

type MainLayoutProps = {
    children?: React.ReactNode;
}

export default MainLayout;