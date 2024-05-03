import React from 'react'
import QualityComp from '../component/QualityComp';
import { CiLocationArrow1 } from "react-icons/ci";
import Qualityimage from "../Image/Quality.png";
import PartyImage from "../Image/party.png";
import chefimage from '../Image/Chef.png';
import VIdeo from '../Image/Video.png';
import "./video.css";

const Video = () => {

    const qualityData = {
        img: Qualityimage,
        title : "Quality food",
        para : "Only the best food with top quality products and ingredients"
    }

    const privatePartyData ={
        img: PartyImage,
        title : "Private Party",
        para : "Get the best food for all your private parties and gatherings"
    }

    const categringData ={
        img: chefimage,
        title : "Categring",
        para : "Get the best food for any occasions and gatherings"
    }

    return (
        <>
            <div className='mt-16 pb-11'>
                <div>
                    <h1 className='text-center text-4xl pt-12 pb-20 text-cyan-900'> <span className='text-ownColor'>We Offer People</span> The Service They Want</h1>
                </div>
                <div>
                    <img className='w-full' src={VIdeo} alt='video'></img>
                </div>
                <div className='image-row'>
                    <QualityComp image={qualityData.img} title={qualityData.title} paragraph={qualityData.para} />
                    <QualityComp image={privatePartyData.img} title={privatePartyData.title} paragraph={privatePartyData.para} />
                    <QualityComp image={categringData.img} title={categringData.title} paragraph={categringData.para} />
                </div>
                <div>
                    <div className="flex justify-center items-center mt-9 ">
                        <button className="flexbutton" type="button">
                            Explore our Service <CiLocationArrow1 className="ml-2 text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video;
