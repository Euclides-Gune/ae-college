import Description from "./description";
import graduation from "../../../assets/graduation.png"
export default function Section() {
    return(
        <section className="body">
        <Description />
        <div className="image_box">
            <img src={graduation} alt="image" className="image" />
        </div>
    </section>
    );
}