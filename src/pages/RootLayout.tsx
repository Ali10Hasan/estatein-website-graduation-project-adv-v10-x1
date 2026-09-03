import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import { useState } from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import ScrollToTop from "../components/AtomComponents/ScrollToTop";

const RootLayout = () => {

    const [showWelcome, setShowWelcome] = useState(() => {
        return sessionStorage.getItem("estatein welcome") !== "true";
    });

    if (showWelcome) {
        return (
            <WelcomeScreen
                onFinish={() => setShowWelcome(false)}
            />
        );
    }


    return (
        <div className='bg-grey-08 light:bg-white-99'>
            <Banner />
            <Navbar />
            <Outlet />
            <CTA />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default RootLayout