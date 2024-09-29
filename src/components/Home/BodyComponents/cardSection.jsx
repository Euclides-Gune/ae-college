import { Fragment } from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaTools } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";

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
                        <LiaLaptopCodeSolid className="icon" />
                    </div>
                </div>
                <div className="card-content">
                    <h1 className="content-text">Building <br /> your website</h1>
                </div>
            </div>
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                    <FaTools className="icon-2"/>
                    </div>
                </div>
                <div className="card-content">
                    <h1>Using the <br /> best tools</h1>
                </div>
            </div>
            <div className="card">
                <div className="card-icon-square">
                    <div className="card-icon">
                        <IoStorefront className="icon"/>
                    </div>
                </div>
                <div className="card-content">
                    <h1><span className="grow_text">Grow up</span> <br />your business</h1>
                </div>
            </div>
        </div> 
        </Fragment>  
    );
}