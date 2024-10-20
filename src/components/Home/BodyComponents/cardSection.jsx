import { Fragment } from "react";
import { IoStorefront } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { IoTimeSharp } from "react-icons/io5";
import { FaPersonSkiing } from "react-icons/fa6";
import { GiHiking } from "react-icons/gi";

export default function CardSection() {
    return(
        <Fragment>
            <div className="card-title">
                <span>Services</span>
            </div>
            <div className="cards">
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                        <PiCertificateFill className="icon" />
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Getting <br /> a certificate
                    </h1>
                </div>
            </div>
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                    <FaChartLine className="icon-2"/>
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Developing <br /> yourself </h1>
                </div>
            </div>
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                        <IoStorefront className="icon"/>
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Grow up <br /> your business </h1>
                </div>
            </div>
        </div>
        <div className="card-title">
            </div>
            <div className="cards">
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                        <FaPersonSkiing className="icon" />
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Improving <br /> your skills</h1>
                </div>
            </div>
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                    <IoTimeSharp className="icon-2"/>
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Mastering <br /> time managment </h1>
                </div>
            </div>
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                        <GiHiking className="icon"/>
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Building <br /> Lidership </h1>
                </div>
            </div>
        </div> 
        </Fragment>  
    );
}