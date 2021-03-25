import Banner from "../components/Banner";
import Me from "../components/Me";
import About from "../components/About";
import Caliber from "../components/Caliber";
import Gallery from "../components/Gallery";

export default function Home() {
    return (
        <main>
            <Banner />
            <Me />
            <About />
            <Caliber />
            <Gallery />
        </main>
    );
}
