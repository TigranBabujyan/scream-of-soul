import React, {Suspense} from 'react';
import {themesOptions} from "./theme";
import {Routes, Route} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';

import LandingPage from './pages/landing/LandingPage';
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import RopeJumping65 from "./pages/rope65/RopeJumping65";
import RopeJumping160 from "./pages/rope160/RopeJumping160";
import Canyoning from "./pages/canyoning/Canyoning";
import WildIceSkiing from "./pages/wildIceSkiing/WildIceSkiing";
import Cart from "./pages/cartPage/CartPage";
import TopNavBar from "./Components/TopNavBar";
import Footer from "./Components/Footer";


function App() {

    const theme = createTheme(themesOptions);

    const additionalInfo =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sit amet justo auctor laoreet.';



    return (
    <div className="App">
            <TopNavBar/>
        <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading... </div>}>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/rope_jumping_65' element={<RopeJumping65/>}/>
                <Route path='/rope_jumping_160' element={<RopeJumping160/>}/>
                <Route path='/cantoning' element={<Canyoning/>}/>
                <Route path='/wild_ice_skiing' element={<WildIceSkiing/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            </Suspense>
        </ThemeProvider>
        <Footer contactNumber='+374 93835959'
                facebookLink='https://www.facebook.com/screamofsoulteam'
                instagramLink='https://www.instagram.com/scream_of_soul_team'
                email='scream.of.soul.team@gmail.com'
                additionalInfo={additionalInfo}
        />
    </div>
  );
}

export default App;
