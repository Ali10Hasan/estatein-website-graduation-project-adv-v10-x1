import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import { useState } from 'react'
import WelcomeScreen from '../components/WelcomeScreen'

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
            <div className="sticky top-0 z-100">
                <Banner />
                <Navbar />
            </div>

            <Outlet />
            <CTA />
            <Footer />
        </div>
    )
}

export default RootLayout