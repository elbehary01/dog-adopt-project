import React from 'react';
import { RandomDogSlider } from '../components/RandomDogSlider/RandomDogSlider'
import 'react-alice-carousel/lib/alice-carousel.css';
import { AboutUsInfo } from "../components/AboutUsInfo/AboutUsInfo";
import { RandomText } from "../components/AboutUsInfo/RandomText"
import { DogsInfo } from '../components/DogsInfo/DogsInfo'


function LandingPage() {
    return (
        <div className="LandingPage">
            <AboutUsInfo
                title={RandomText.title}
                text={RandomText.text} />
            <RandomDogSlider />
            <DogsInfo />

        </div>)
}
export { LandingPage };