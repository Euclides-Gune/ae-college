import { Link } from "react-router-dom";
import "./aboutus.css";
import cartoon from "../../../assets/about-us-cartoon.webp";

export default function AboutUsBody() {
    return(
        <div className="about-us-box">
            <h1 className="about-us-title">ABOUT US</h1>
            <section className="story">
                <div className="story-telling">
                    <div className="story-telling-title-box">
                        <h1 className="story-telling-title">Hi!</h1>
                    </div>
                    <div className="story-telling-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus fuga ab corporis assumenda, odio obcaecati at error minus ut vitae aliquid reiciendis earum, veniam autem nemo a delectus adipisci!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptates maiores reprehenderit similique temporibus at nobis, ipsa perferendis laboriosam fugiat odit eius accusamus adipisci sapiente possimus repellat quia officiis optio!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus adipisci itaque velit ipsam quis officiis magni eum voluptates explicabo, non deserunt repudiandae repellat omnis dolores in, odit ipsum pariatur qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sit. Accusamus veritatis nisi cupiditate error consequuntur itaque numquam quia odio! Accusantium sed natus numquam molestias possimus nihil velit tempora dolorem!
                    </div>
                    <div className="story-telling-links">
                        <div className="links-box">
                            <span className="link">Email: <Link className="links-anchor">ae-services@gmail.com</Link></span>
                            <span className="link">   Instagram: <Link className="links-anchor">@AE-Services_institutue</Link></span>
                        </div>
                        <div className="links-box">
                            <span className="link">Facebook: <Link className="links-anchor">AE_Services_institute</Link></span>
                            <span className="link">X-Twitter: <Link className="links-anchor">AE-Services_institute</Link></span>
                        </div>
                    </div>
                </div>
                <div className="story-image-box">
                    <img src={cartoon} alt="" className="story-image" />
                </div>
            </section>
        </div>
    );
}